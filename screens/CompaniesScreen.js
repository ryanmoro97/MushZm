import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import styles from "../styles";
import { Linking } from "react-native";

const CompaniesScreen = () => {
    return (
      <View style={styles.ShopContainer}>
        <ScrollView style={styles.scrollView}>
          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://compasspathways.com")}>
                  Compass Pathways - (NASDAQ: CMPS)
            </Text>
            <Text>
              {"\n"}COMPASS is a mental health care company dedicated to accelerating 
              patient access to evidence-based innovation in mental health. 
              Their first program is researching how psilocybin therapy could help people with treatment-resistant depression.
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://mindmed.co")}>
                  Mind Medicine - (NEO: MMED)
            </Text>
            <Text>
              {"\n"}MindMed is a psychedelic medicine biotech company that discovers, 
              develops and deploys psychedelic inspired medicines and therapies to address addiction and mental illness.
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://psilocybinalpha.com/company/cybin-corp")}>
                  Cybin - (NEO: CYBN)
            </Text>
            <Text>
              {"\n"}Cybin is focused on progressing psychedelic therapeutics by utilizing 
              proprietary drug discovery platforms, innovative drug delivery systems, novel 
              formulation approaches and treatment regimens for psychiatric disorders.
              </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://numinus.com")}>
                  Numinus - (TSXV: NUMI)
            </Text>
            <Text>
              {"\n"}Numinus Wellness is a publicly-traded company that is licensed (via Salvation Botanicals) by 
              Health Canada to test, sell and distribute psychedelic substances.
              </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://silopharma.com")}>
                  Silo Pharma - (OTC: SILO)
            </Text>
            <Text>
              {"\n"}Silo Pharma focuses on bringing together traditional biotech research and psychedelic 
              practices for treatment of diseases such as depression, post-traumatic stress disorder, Parkinson’s, among others. 
              </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://www.novamind.ca")}>
                  Novamind - (OTC: NVMDF)
            </Text>
            <Text>
              {"\n"}Novamind is a Canadian company that builds infrastructure for psychedelic companies in North America. It engages in the building and maintenance 
              of clinics, research centres, and other retreats related to psychedelics.</Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.companyItemHeader}
                  onPress={() => Linking.openURL("https://www.fieldtriphealth.com")}>
                  Field Trip Health - (OTC: FTRPF)
            </Text>
            <Text>
              {"\n"}FTH is based in Canada and concentrates on the development of psychedelic 
              therapies. The firm is different from other biotech firms as it is working 
              on building digital tools that aid with psychedelic experiences.
              </Text>
          </View>

        </ScrollView>
      </View>

    );
};

export default CompaniesScreen;