import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Mushzmcontainer: {
    flex: 1, 
    backgroundColor : "#fda761", 
    justifyContent: 'space-around',
    borderColor: '#5b0e2d',
    borderWidth: 3,
  },
  ShopContainer:{
    flex: 1,
    backgroundColor : "#fda761", 
    justifyContent: 'center', 
    borderColor: '#5b0e2d',
    borderWidth: 3,
    paddingTop: 20,
  },
  ProfileContainer:{
    flex: 1,
    backgroundColor : "#fda761", 
    justifyContent: 'center', 
    borderColor: '#5b0e2d',
    borderWidth: 3,
  },
  StackContainer: {
    flex: 1,
    backgroundColor : "#fda761", 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    borderColor: '#5b0e2d',
    borderWidth: 3,
    alignContent: 'center',
  },
  scrollView: {
    marginBottom: 5,
    marginTop: 5,
  },
  mushroomListItems:{
    borderColor: '#5b0e2d',
    borderWidth: 3,
    borderRadius:5,
  },

  stackText: {
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  image: {
    width      : null,
		resizeMode : 'contain',
		height     : 220
  },
  listItem: {
    borderColor: '#5b0e2d',
    borderWidth: 3,
    borderRadius:5,
    marginTop: 15,
    marginHorizontal: 5,
    padding: 5,
  },
  listItemHeader:{
    // fontSize: 20,
    textDecorationLine: 'underline',
  },  
  companyItemHeader:{
    textDecorationLine: 'underline',
    textAlign: 'center',
  },

  input: {
    borderColor: '#5b0e2d',
    width: 50,
    borderWidth: 2,
    padding: 7,
    margin: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  inputRow:{
    flexDirection: "row", 
    alignContent: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  unitCombo:{
    flexDirection: 'row',
  },
  dropDownUnitsBtn:{
    width: 45,
    height: 35,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 0,
    borderColor: '#5b0e2d',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#fda761", 
  },
  dropDownUnits:{
    backgroundColor: "#fda761",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5b0e2d', 
  },
  dropDownUnitsRow: { 
    borderBottomColor: '#5b0e2d', 
    borderRadius: 3, 
  },
  dropDownDoseRow: { 
    borderBottomColor: '#5b0e2d',
    borderRadius: 3, 
  },
  dropDownDose: {
    backgroundColor: "#fda761",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5b0e2d', 
  },
  dropDownDoseBtn: {
    width: 100,
    borderColor: '#5b0e2d',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fda761", 
  },
  labelInputContainer:{
    flexDirection:'column',
    justifyContent: 'space-around',
  },
  fullLabelInputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    
  },
  inputContainer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerBackground:{
    width:390,
    height:60,
  },
  tabs:{
    width: 25, height: 25,
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  buttonRows: {
    flex: 0, 
    flexDirection: "row", 
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#5b0e2d',
  },
  displayValueText:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  boxArea:{
    borderWidth:2,
    borderColor: '#5b0e2d',
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
  },
  buttonImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    tintColor: '#5b0e2d',
  },
  Button: {

  },
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#000',
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: '#fda761',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});