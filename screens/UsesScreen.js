import React from "react";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import styles from "../styles";

const UsesScreen = () => {
  return (
    <View style ={styles.StackContainer}> 
      <ScrollView style={styles.scrollView}>
          <Text style = {styles.sectionHeader}>Overview</Text>
          <Text>    There is increasing interest in the potential therapeutic uses of psilocybin.
          At this time, there are no approved therapeutic products containing psilocybin in Canada or elsewhere. There is ongoing research looking at the potential 
          of psilocybin to treat various mental health disorders such as anxiety, depression, OCD, problematic substance use, cluster headaches, and cancer-related or other end-of-life psychological distress. 
          Despite social stigma and legal red tape, researchers are forging ahead with clinical trials for FDA approval.
          
          {"\n"}{"\n"}      Dr. George R. Greer, co-founder and president of the Heffter Research Institute, a non-profit research center that focuses on the therapeutic uses of psychedelics, particularly psilocybin, explains his motivations:
          {"\n"}“Our mission is two-fold: one to do research that helps us understand the mind, the brain, how all that works, and number two, to help reduce suffering through therapeutic use of psychedelics.”
          </Text>
          <Text style = {styles.sectionHeader}>Depression</Text>
          <Text>    Depression is among the most researched indications for psilocybin therapy. As Healthline previously reported last year, psilocybin therapy was given “breakthrough therapy” designation (a review fast track) by the FDA for the treatment of depression.
          In a small study of adults with major depression, Johns Hopkins Medicine researchers report that two doses of the psychedelic substance psilocybin, given with supportive psychotherapy, produced rapid and large reductions in depressive symptoms, with most participants showing improvement and half of study participants achieving remission through the four-week follow-up.
          {"\n"}{"\n"}      The findings from the study, published Nov. 4 in JAMA Psychiatry, suggest that psilocybin may be effective in the much wider population of patients who suffer from major depression than previously appreciated.
          “The magnitude of the effect we saw was about four times larger than what clinical trials have shown for traditional antidepressants on the market,” says Alan Davis, Ph.D., adjunct assistant professor of psychiatry and behavioral sciences at the Johns Hopkins University School of Medicine. “Because most other depression treatments take weeks or months to work and may have undesirable effects, this could be a game changer if these findings hold up in future ‘gold-standard’ placebo-controlled clinical trials.”
          </Text>
          <Text style = {styles.sectionHeader}>Addictions</Text>
          <Text>      In a study from Johns Hopkins University, researchers found that psilocybin therapy significantly improved abstaining from smoking over a 12-month follow-up period.
          Matthew Johnson, PhD, associate professor of psychiatry and behavioral sciences at Johns Hopkins University School of Medicine, led that study.
          According to him, psilocybin also has potential to treat other substance use disorders, including alcohol and cocaine addiction.
          “The general idea is that the nature of these disorders is a narrowed mental and behavioral repertoire,” he told Healthline. “So, [psilocybin] in well-orchestrated sessions [has] the ability to essentially shake someone out of their routine to give a glimpse of a larger picture and create a mental plasticity with which people can step outside of those problems.”
          In fact, a small open-label study Source on psilocybin and alcohol dependence found that following treatment, both drinking and heavy drinking declined.
          
          </Text>
          <Text style = {styles.sectionHeader}>Dimentia</Text>
          <Text>    Currently, there are no disease-modifying treatments for Alzheimer’s disease (AD) or any other dementia subtype. The renaissance in psychedelic research in recent years, in particular studies involving 
            psilocybin and lysergic acid diethylamide (LSD), coupled with anecdotal reports of cognitive benefits from micro-dosing, suggests that they may have a therapeutic role in a range of psychiatric and neurological 
            conditions due to their potential to stimulate neurogenesis, provoke neuroplastic changes and reduce neuroinflammation.
          </Text>
          <Text style = {styles.sectionHeader}>Anxiety</Text>
          <Text>      Some of the first clinical research on psilocybin studied its use in treating anxiety symptoms in patients with cancer.
          Charles S Grob completed a double-blind, placebo-controlled study to examine the safety and efficacy of psilocybin in 12 patients for the treatment of psychological distress associated with the existential crisis of terminal disease. Inclusion criteria were a diagnosis of acute stress disorder, generalized anxiety disorder, anxiety disorder due to cancer, or adjustment disorder with anxiety per the DSM-IV criteria along with a diagnosis of advanced-stage cancer.
          Several rating scales were used the day before, day of, and day after each session along with 2 weeks, monthly, and 6 months postsession. Anxiety significantly decreased as measured by the State-Trait Anxiety Inventory at 1 and 3 months posttreatment in the psilocybin group compared to niacin. Mood improved for 2 weeks after treatment and reached statistical significance on the Beck Depression Inventory at the 6-month point with the same comparison.
          </Text>
      </ScrollView>
    </View>
  )
};

export default UsesScreen;