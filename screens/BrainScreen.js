import React from "react";
import { StyleSheet, Text, View, ScrollView, TextBase, Image } from "react-native";
import styles from "../styles";

const BrainScreen = () => {
    return (
        <View style ={styles.StackContainer}> 
            <ScrollView style={styles.scrollView}>
                <Text style = {styles.sectionHeader}>Overview</Text>
                <Text>      Psilocybin mushrooms, commonly known as magic mushrooms, mushrooms or 
                shrooms, are a polyphyletic, informal group of fungi that contain 
                psilocybin which turns into psilocin upon ingestion. When psilocybin is ingested, it 
                is broken down by the liver resulting in the psilocin compound responsible for the psychedelic effects.
                Psilocybin and psilocin create short-term increases in tolerance of users, resulting in weakened 
                effects from repetitive use. The psychedelic effects tend to appear around 20 minutes after ingestion and 
                can last up to 6 hours.
                </Text>
                <Text style = {styles.sectionHeader}>Psilocin</Text>
                <Text>      Psilocin is an agonist for several serotonin receptors, which are also known as 5-hydroxytryptamine (5-HT) receptors. 
                It is a tryptamine compound with a chemical structure similar to the neurotransmitter serotonin.
                The neuropsychological effects of psilocin appear to be mediated by stimulation of serotonergic receptors, namely, subtypes 5HT2A, 5HT2C, and 5HT1C.
                
                </Text>
                <Text style = {styles.sectionHeader}>Toxicity</Text>
                <Text>      The toxicity of psilocybin is low. In rats, the median lethal dose (LD50) when administered orally is 280 milligrams per kilogram (mg/kg), approximately one and a half times that of caffeine.
                Psilocybin comprises approximately 1% of the weight of Psilocybe cubensis mushrooms, and so nearly 1.7 kilograms (3.7 lb) of dried mushrooms, or 17 kilograms (37 lb) of fresh mushrooms, would be required for a 60-kilogram (130 lb) person to reach the 280 mg/kg LD50 value of rats.
                For reference a higher dose is considered to be in the range of 3-6 grams.
                </Text>
                <Image source={require('../assets/images/toxicity.png')}
                    style={styles.image}/>
                <Text>      The Registry of Toxic Effects of Chemical Substances assigns psilocybin a relatively high therapeutic index of 641 (higher values correspond to a better safety profile); for comparison, the therapeutic indices of aspirin and nicotine are 199 and 21, respectively.</Text>
                <Text style = {styles.sectionHeader}>Effects</Text>
                <Text>      The effects of psilocybin are highly variable and depend on the mindset and environment in which the user has the experience, factors commonly referred to as set and setting.
                At higher doses, psilocybin can lead to intensification of affective responses, enhanced ability for introspection, regression to primitive and childlike thinking, and activation of vivid memory traces with pronounced emotional undertones.
                Open-eye visual hallucinations are common, and may be very detailed although rarely confused with reality.
                Closed-eye hallucinations may occur, where the affected individual sees multicolored geometric shapes and vivid imaginative sequences.
                {"\n"}{"\n"}      A 2011 prospective study by Roland R. Griffiths and colleagues suggests that a single high dosage of psilocybin can cause long-term changes in the personality of its users. About half of the study participants—described as healthy, "spiritually active", and many possessing postgraduate degrees—showed an increase in the personality dimension of openness (assessed using the Revised NEO Personality Inventory), 
                and this positive effect was apparent more than a year after the psilocybin session. A further study by Griffiths in 2017 found that doses of 20 to 30 mg/70 kg psilocybin inducing mystical-type experiences brought more lasting changes to traits including altruism, gratitude, forgiveness and feeling close to others when they were combined with a regular meditation practice and an extensive spiritual practice support program. 
                {"\n"}{"\n"}      A 2005 survey in the UK found that nausea or vomiting was experienced by over a quarter of those who had used psilocybin mushrooms in the last year, although this effect is caused by the mushroom rather than psilocybin itself. In one study, administration of gradually increasing dosages of psilocybin daily for 21 days had no measurable effect on electrolyte levels, blood sugar levels, or liver toxicity tests.
                {"\n"}{"\n"}      Most of the comparatively few fatal incidents reported that are associated with psychedelic mushroom usage involve the simultaneous use of other drugs, especially alcohol. Probably the most common cause of hospital admissions resulting from psychedelic mushroom usage involve "bad trips" or panic reactions, in which affected individuals become extremely anxious, confused, agitated, or disoriented.
                </Text>

                <Text style = {styles.sectionHeader}>Physical Effects</Text>
                <Text>      Common physical responses include pupil dilation; changes in heart rate, including increases, decreases, and variable responses; changes in blood pressure, including hypotension, hypertension, and general instability; changes in stretch reflex, including increases and decreases; nausea; tremor; and dysmetria (inability to properly 
                direct or limit motions). The temporary increases in blood pressure caused by the drug can be a risk factor for users with pre-existing hypertension.
                </Text>
                <Text style = {styles.sectionHeader}>Neurogenesis</Text>
                <Text>      In a new study, Yale researchers show that a single dose of psilocybin given to mice prompted an immediate and long-lasting increase in connections between neurons. The findings are published July 5 in the journal Neuron.
                "We not only saw a 10% increase in the number of neuronal connections, but also they were on average about 10% larger, so the connections were stronger as well," said Yale's Alex Kwan, associate professor of psychiatry and of neuroscience and senior author of the paper.
                The research found that psilocybin increased the density of dendritic spines, small protrusions found on nerve cells which aid in the transmission of information between neurons. Chronic stress and depression are known to reduce the number of these neuronal connections.
                </Text>
                <Text style = {styles.sectionHeader}>Underlying Disorders</Text>
                <Text>      There has been some concern that use of psychedelic agents in a mental health population could exacerbate the underlying disease or cause suicidal behavior despite little clinical data showing significant safety issues or development of addiction with the administration of hallucinogens. Johansen and Krebs set out to examine this claim and published a population study detailing their findings. This population study of 135'095 random adults in the United States included 19'299 psychedelic users (which included LSD, mescaline, and psilocybin). No significant association was found between lifetime use of psychedelics and increased mental health treatment or suicidal thoughts, plans, or attempts.
                </Text>

            </ScrollView>
        </View>
    )
}

export default BrainScreen;