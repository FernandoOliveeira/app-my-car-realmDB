import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal, ScrollView, ToastAndroid, Alert } from 'react-native';

import { Container, CustomView, Name, Price, Service, Date, Labor, TotalPrice, ModalTitle, ModalSubmitView, ModalContainer, ModalCustomViewInput, ModalFormText, ModalSubmitText, ModalForm, ModalSubmit, Submit, SubmitText, CustomViewRefreshDelete, ModalCustomView, ModalInput } from './styles';
import Realm from 'realm';
import getRealm from '~/services/realm'


// Format the money values to BRL format
const moneyFormat = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  return value
}
// Set number to only two decimals numbers
const strip = number => moneyFormat((parseFloat(number.toPrecision(12)).toFixed(2) / 100).toString().replace('.', ','));



const MaintenanceList = ({ data }) => {
  // Hooks  
  const [modalVisible, setModalVisible] = useState(false);
  const [nameInput, setNameInput] = useState(data.name);
  const [serviceInput, setServiceInput] = useState(data.service);
  const [priceInput, setPriceInput] = useState(strip(Number(data.price)));
  const [laborInput, setLaborInput] = useState(strip(Number(data.labor)));
  const [dateInput, setDateInput] = useState(data.date);


  // Toast
  const toast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  // Realm
  const realmDelete = () => {
    try {
      const realm = new Realm(getRealm())

      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('List', data.id));
      });

      toast('Registro deletado com sucesso!');

    } catch (err) {
      toast('Erro ao deletar registro. Tente novamente.');

      console.log(`Failed to delete register: ${err}`);
    }
  }

  const realmUpdate = (updateList) => {
    const dataList = {
      id: data.id,
      name: updateList.nameInput,
      service: updateList.serviceInput,
      price: updateList.priceInput,
      labor: updateList.laborInput,
      date: updateList.dateInput,
    }

    const realm = new Realm(getRealm());

    realm.write(() => {
      realm.create('List', dataList, 'modified');
    });
  }

  // Update Modal Button
  const handleUpdateButton = () => {
    try {
      let price = parseFloat(priceInput.replace(',', '.').replace(".", ""));
      let labor = parseFloat(laborInput.replace(',', '.').replace(".", ""));

      const updateList = { nameInput, serviceInput, priceInput: price, laborInput: labor, dateInput }

      realmUpdate(updateList);

      setModalVisible(false);

      toast('Registro atualizado com sucesso!');

    } catch (err) {
      toast('Erro ao atualizar. Tente novamente.');

      console.log(`Failed to update. Error: ${err}`);

    }
  }

  // Delete Button Alert
  const handleDeleteButton = () => Alert.alert(
    "Deletar",
    "Deseja mesmo apagar este registro ?",
    [
      {
        text: "Sim",
        onPress: () => { realmDelete(); }
      },
      {
        text: "Cancelar",
        onPress: () => { }

      }
    ]

  );


  return (
    <Container>

      <CustomView>
        <Name>{data.name}</Name>
      </CustomView>

      <CustomView>
        <Ionicons name={'construct-outline'} size={30} color={'#333'} style={{ paddingRight: '3%' }} />
        <Service>{data.service}</Service>
      </CustomView>

      <CustomView>
        <Ionicons name={'cash-outline'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <Price>Preço: {strip(data.price)} R$</Price>
      </CustomView>

      <CustomView>
        <Ionicons name={'hammer-outline'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <Labor>Mão de Obra: {strip(data.labor)} R$</Labor>
      </CustomView>

      <CustomView>
        <MaterialCommunityIcons name={'barcode'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <TotalPrice>Total: {strip(data.labor + data.price)} R$</TotalPrice>
      </CustomView>

      <CustomView>
        <Ionicons name={'calendar-outline'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <Date>{data.date}</Date>
      </CustomView>

      {/* Refresh and Delete Buttons */}
      <CustomViewRefreshDelete>
        <CustomView>
          <Submit
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons name={'refresh'} size={25} color={'#333'} style={{ paddingRight: '3%' }} />
            <SubmitText>Atualizar</SubmitText>
          </Submit>
        </CustomView>

        <CustomView>
          <Submit
            onPress={handleDeleteButton}
          >
            <Ionicons name={'trash-outline'} size={25} color={'#333'} style={{ paddingRight: '3%' }} />
            <SubmitText>Deletar</SubmitText>
          </Submit>
        </CustomView>
      </CustomViewRefreshDelete>



      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { }}
      >
        <ModalContainer>
          <ModalForm>

            <ModalTitle>Atualizar Registro</ModalTitle>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >

              <ModalCustomViewInput>
                <ModalFormText>Nome:</ModalFormText>
                <ModalInput
                  value={nameInput}
                  onChangeText={setNameInput}
                  placeholder="Ex.: Mecânica de Autos"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Serviço:</ModalFormText>
                <ModalInput
                  value={serviceInput}
                  onChangeText={setServiceInput}
                  placeholder="Ex.: Troca de Óleo"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Valor:</ModalFormText>
                <ModalInput
                  keyboardType="numeric"
                  value={priceInput}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/(\d)(\d{2})$/, "$1,$2");
                    text = text.replace(/(?=(\d{3})+(\D))\B/g, ".");
                    setPriceInput(text);
                  }}
                  placeholder="Preço:"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Mão de Obra:</ModalFormText>
                <ModalInput
                  keyboardType="numeric"
                  value={laborInput}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/(\d)(\d{2})$/, "$1,$2");
                    text = text.replace(/(?=(\d{3})+(\D))\B/g, ".");
                    setLaborInput(text);
                  }}
                  placeholder="Valor da Mão de Obra"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Data:</ModalFormText>
                <ModalInput
                  keyboardType="numeric"
                  value={dateInput}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/^(\d{2})(\d)/g, "$1/$2");
                    text = text.replace(/(\d)(\d{4})$/, "$1/$2");
                    setDateInput(text);
                  }}
                  placeholder="DD/MM/AAAA"
                />
              </ModalCustomViewInput>


              <ModalCustomView>

                <ModalSubmitView>
                  <ModalSubmit onPress={handleUpdateButton}>
                    <Ionicons name={'refresh'} size={25} color={'white'} style={{ paddingRight: 5 }} />
                    <ModalSubmitText>Atualizar</ModalSubmitText>
                  </ModalSubmit>
                </ModalSubmitView>

                <ModalSubmitView>
                  <ModalSubmit onPress={() => {
                    // If the update is canceled, reset the input values
                    setNameInput(data.name);
                    setServiceInput(data.service);
                    setPriceInput(strip(Number(data.price)));
                    setLaborInput(strip(Number(data.labor)));
                    setDateInput(data.date);

                    setModalVisible(false);
                  }}>
                    <MaterialCommunityIcons name={'cancel'} size={25} color={'white'} style={{ paddingRight: 5 }} />
                    <ModalSubmitText>Cancelar</ModalSubmitText>
                  </ModalSubmit>
                </ModalSubmitView>

              </ModalCustomView>

            </ScrollView>
          </ModalForm>
        </ModalContainer>
      </Modal>


    </Container >
  );
}

export default MaintenanceList;