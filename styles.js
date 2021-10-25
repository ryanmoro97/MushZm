import { Row } from 'react-bootstrap';
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
    flex:1,
    backgroundColor : "#fda761", 
    // justifyContent: 'center',
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
    alignContent: 'center',
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
  detailsTitle:{
    fontSize: 20, 
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  mushroomListItem:{
    borderColor: '#5b0e2d',
    borderWidth: 3,
    borderRadius:5,
    backgroundColor:  "#b1acd9", 
    flexDirection:'column',
    padding:5,
    minWidth:'45%',
    marginBottom:15,
  },
  strainText:{
    fontWeight: 'bold',
    margin: 5,
  },
  mushroomHeader:{
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    paddingBottom:5,
    paddingTop:5,
  },

  mushroomListItems:{
    justifyContent: 'space-evenly',
  },
  stackText: {
    textAlign: 'center',
  },
  mushImg:{
    flex:1,
    borderColor: '#5b0e2d',
    borderWidth: 3,
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  mushImgDetails:{
    borderColor: '#5b0e2d',
    borderWidth: 3,
    borderRadius: 15,
    width: null,
    height: 350,
  },
  addToCart:{
    borderWidth:2,
    alignSelf: 'center',
    borderColor: '#5b0e2d',
    width: 100,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#b1acd9", 
  },
  cartIcon:{
    resizeMode: 'contain',
    // flex: ,
    height: 25,
    width: 25,
    marginRight: 10,
    tintColor: '#5961a6',
    // justifyContent: 'center',
  },
  loginBtn:{
    alignContent: 'center',
    borderWidth:2,
    alignSelf: 'center',
    borderColor: '#5b0e2d',
    borderRadius: 5,
    width: 150,
    padding: 5,
    margin: 20,
    backgroundColor: "#b1acd9", 
  },

  loginBtnText:{
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Georgia',
  },
  
  shopIconContainer:{
    justifyContent: 'space-between',
  },
  sectionHeader: {
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  infoSectionHeader: {
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 15,
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
    backgroundColor: '#b1acd9',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    padding: 10,
  },
  listItemHeader:{
    
    // fontSize: 20,
    textDecorationLine: 'underline',
  },  
  companyItemHeader:{
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },

  input: {
    borderColor: '#5b0e2d',
    backgroundColor: "#b1acd9", 
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
    backgroundColor: "#b1acd9", 
  },
  dropDownUnits:{
    backgroundColor: "#b1acd9", 
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5b0e2d', 
  },
  dropDownUnitsRow: { 
    borderBottomColor: '#5b0e2d',
    backgroundColor: "#b1acd9", 
    borderRadius: 3, 
  },
  dropDownDoseRow: { 
    borderBottomColor: '#5b0e2d',
    borderRadius: 3, 
    backgroundColor: "#b1acd9", 
  },
  dropDownWeightRow:{
    borderBottomColor: '#5b0e2d',
    borderRadius: 3, 
    backgroundColor: "#b1acd9", 
    height: 40,
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
    backgroundColor: "#b1acd9",  
  },
  DropDownWeightBtn:{
    width: 90,
    height: 35,
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 5,
    borderColor: '#5b0e2d',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#b1acd9", 
  },
  
  labelInputContainer:{
    flexDirection:'column',
    justifyContent: 'space-around',
  },
  totalText:{
    fontFamily: 'Georgia',
    fontSize: 25, 
  },
  fullLabelInputContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
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
  mushInfo:{
    paddingBottom: 10,
    textAlign: 'center',
    // color: '#5b0e2d',
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
    // backgroundColor: "#b1acd9", 
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