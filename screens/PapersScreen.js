import React from "react";
import {
  Linking,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import styles from "../styles";

const PapersScreen = ({navigation}) => {
    return (
      <View style={styles.ShopContainer}>
        <ScrollView style={styles.scrollView}>
          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
                  onPress={() => Linking.openURL("https://link.springer.com/article/10.1007/s13311-017-0542-y")}>
                  Potential Therapeutic Effects of Psilocybin
            </Text>
            <Text>
              {"\n"}Journal: Neurotherapeutics{"\n"}
              Impact Factor: 6.31 
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://onlinelibrary.wiley.com/doi/10.1111/acps.12904")}>
              Effects of psilocybin therapy on personality structure
            </Text>
            <Text>
            {"\n"}Journal: Acta Psychiatrica Scandinavica{"\n"}
            Impact Factor: 4.57
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://jamanetwork.com/journals/jamapsychiatry/article-abstract/210962")}>
              Pilot Study of Psilocybin Treatment for Anxiety in Patients With Advanced-Stage Cancer
            </Text>
            <Text>
            {"\n"}Journal: JAMA Psychiatry{"\n"}
            Impact Factor: 8.16
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://link.springer.com/article/10.1007/s00213-006-0457-5")}>
              Psilocybin can occasion mystical-type experiences having substantial and sustained personal meaning and spiritual significance
            </Text>
            <Text>
            {"\n"}Journal: Psychopharmacology {"\n"}
            Impact Factor: 3.97
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://onlinelibrary.wiley.com/doi/abs/10.1080/1355621021000005937")}>
              The pharmacology of psilocybin
            </Text>
            <Text>
            {"\n"}Journal: Addiction Biology {"\n"}
            Impact Factor: 3.65
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://journals.sagepub.com/doi/full/10.1177/2045125316638008")}>
              Antidepressive, anxiolytic, and antiaddictive effects of ayahuasca, psilocybin and lysergic acid diethylamide (LSD): a systematic review of clinical trials published in the last 25 years
            </Text>
            <Text>
            {"\n"}Journal: Therapeutic Advances in Psychopharmacology {"\n"}
            Impact Factor: 3.98
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://www.sciencedirect.com/science/article/pii/S2215036616300657")}>
              Psilocybin with psychological support for treatment-resistant depression: an open-label feasibility study
            </Text>
            <Text>
            {"\n"}Journal: The Lancet Psychiatry{"\n"}
            Impact Factor: 4.88
            </Text>
          </View>

          <View style = {styles.listItem}>
            <Text style={styles.listItemHeader}
              onPress={() => Linking.openURL("https://pubmed.ncbi.nlm.nih.gov/23727882/")}>
              Effects of psilocybin on hippocampal neurogenesis and extinction of trace fear conditioning
            </Text>
            <Text>
            {"\n"}Journal: Experimental Brain Research{"\n"}
            Impact Factor: 1.85
            </Text>
          </View>

        </ScrollView>
      </View>
    );
};

export default PapersScreen;