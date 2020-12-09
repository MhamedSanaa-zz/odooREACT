import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Odoo from 'react-native-odoo-promise-based'

const ReadPartners = () => {
    const odoo = new Odoo({
        mode: 'cors',
        host: 'localhost',
        port: 8069,
        database: 'odoo12',
        username: 'mhamed.sanaa6@gmasil.com',
        password: '123456',
        sid: null,
        protocol: 'http'
      })
      const [partnerList, setPartnerList] = useState([]);
      odoo.connect()
        .then(response => {})
        .catch(e => {})
        const  params = {
            ids: [1],
            fields: [ 'name' ]
          }
          const  context = {
          }
         
          /*odoo.get('res.partner', params, context)
          .then((response) => response.json())
          .then((json) => setPartnerList(json.result))
          .catch(e => {})*/
  return (
    <View>
      <Text>here{partnerList}</Text>
      <FlatList
            data={partnerList}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>
                {item.name}
              </Text>
                )}
          />
      <Text>PIPELINE</Text>
      <View style={{flex : 1 ,flexDirection: 'row'}}>
        <View style={{flex:1,flexDirection: 'column'}}>
            <Text>
              New Deals
            </Text>
            <View>
              <View>
                <Text>
                  Customer name
                </Text>
                <Text>
                  planned outcome
                </Text>
                <Text>
                  deal rating
                </Text>
              </View>
            </View>
        </View>
        <View style={{flex:1,flexDirection: 'column'}}>
            <Text>
              Qualified Deals
            </Text>
            <View>
              <Text>
                Customer name
              </Text>
              <Text>
                planned outcome
              </Text>
              <Text>
                deal rating
              </Text>
            </View>
        </View>
          <View style={{flex:1,flexDirection: 'column'}}>
              <Text>
                Deals Won
              </Text>
              <View>
                <Text>
                  Customer name
                </Text>
                <Text>
                  deal outcome
                </Text>
                <Text>
                  deal rating
                </Text>
              </View>
          </View>
          <View style={{flex:1,flexDirection: 'column'}}>
              <Text>
                Deals Lost
              </Text>
              <View>
                <Text>
                  Customer name
                </Text>
                <Text>
                  deal outcome
                </Text>
                <Text>
                  Lost Reason
                </Text>
            </View>
        </View>
      </View>
    </View>
  );
}

export default ReadPartners;