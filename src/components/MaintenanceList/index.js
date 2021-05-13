import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal, ScrollView } from 'react-native';

import { Container, CustomView, Name, Price, Service, Date, Labor, TotalPrice, ModalTitle, ModalSubmitView, ModalContainer, ModalCustomViewInput, ModalFormText, ModalSubmitText, ModalForm, ModalSubmit, Submit, SubmitText, CustomViewRefreshDelete, ModalCustomView, ModalInput } from './styles';


const MaintenanceList = ({ data }) => {
  // Hooks  
  const [modalVisible, setModalVisible] = useState(false);
  const [nameInput, setNameInput] = useState(data.name);
  const [serviceInput, setServiceInput] = useState(data.service);
  const [priceInput, setPriceInput] = useState(Number(data.price).toString());
  const [laborInput, setLaborInput] = useState(Number(data.labor).toString());
  const [dateInput, setDateInput] = useState(data.date);



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
        <Price>Preço: {data.price} R$</Price>
      </CustomView>

      <CustomView>
        <Ionicons name={'hammer-outline'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <Labor>Mão de Obra: {data.labor} R$</Labor>
      </CustomView>

      <CustomView>
        <MaterialCommunityIcons name={'barcode'} size={30} color={'#666'} style={{ paddingRight: '3%' }} />
        <TotalPrice>Total: {data.labor + data.price} R$</TotalPrice>
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
          <Submit>
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
                  value={priceInput}
                  onChangeText={setPriceInput}
                  placeholder="Preço:"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Mão de Obra:</ModalFormText>
                <ModalInput
                  value={laborInput}
                  onChangeText={setLaborInput}
                  placeholder="Valor da Mão de Obra"
                />
              </ModalCustomViewInput>

              <ModalCustomViewInput>
                <ModalFormText>Data:</ModalFormText>
                <ModalInput
                  value={dateInput}
                  onChangeText={setDateInput}
                  placeholder="DD/MM/AAAA"
                />
              </ModalCustomViewInput>


              <ModalCustomView>

                <ModalSubmitView>
                  <ModalSubmit onPress={() => { }}>
                    <Ionicons name={'refresh'} size={25} color={'white'} style={{ paddingRight: 5 }} />
                    <ModalSubmitText>Atualizar</ModalSubmitText>
                  </ModalSubmit>
                </ModalSubmitView>

                <ModalSubmitView>
                  <ModalSubmit onPress={() => {
                    // If the update is canceled, reset the input values
                    setNameInput(data.name);
                    setServiceInput(data.service);
                    setPriceInput(Number(data.price).toString());
                    setLaborInput(Number(data.labor).toString());
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