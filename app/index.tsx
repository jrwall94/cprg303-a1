// import { StyleSheet } from 'react-native';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView }
  from 'react-native-safe-area-context';

export default function TabOneScreen() {
  const showAlert=()=>Alert.alert('Alert Button pressed');
 return (
 <SafeAreaView style={{flex:1}} edges={['bottom', 'left', 'right']}>
    <View style = {styles.container}>
      <Image source={require('@/assets/images/profile-pic.jpg')}
        style={styles.profile}/>
      <View style={{flex:1}}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text>via frenchie_fry39</Text>
      </View>
    </View>
    <View style={{height: '63%'}}>
      <Image source={require('@/assets/images/post.jpg')}
      style={styles.post}/>
    </View>

    <View style = {styles.scontainer}>
      <Image source={require('@/assets/images/heart-icon.png')}
      style={styles.icon}/>
      <Image source={require('@/assets/images/comment-icon.png')}
      style={styles.icon}/>
      <Image source={require('@/assets/images/share-icon.png')}
      style={styles.icon}/>
      <View style={styles.separator}></View>
      <Image source={require('@/assets/images/bookmark-icon.png')}
      style={styles.icon}/>
    </View>
    
    <View style = {styles.scontainer}>
      <Image source={require('@/assets/images/flower-profile.jpg')}
        style={styles.sprofile}/>
        <Image source={require('@/assets/images/cat-profile.jpg')}
        style={styles.sprofile}/>
        <Image source={require('@/assets/images/sunset-profile.jpg')}
        style={styles.sprofile}/>

        <View style={styles.text}>
          <Text>Liked by</Text>
          <Text style={{fontWeight: 'bold'}}> paisley.print.48</Text>
          <Text> and </Text>
          <Text style={{fontWeight: 'bold'}}>7 others</Text>
        </View>

    </View>

      <View style = {styles.commentContainer}>
        <View style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>frenchie_fry39 </Text>
          <Text> Fresh shot on a sunny day! </Text>
        </View>
      </View>
      <View style = {styles.commentContainer}>
        <View style={styles.text}>
          <Text style={{color: '#535050'}}>View all 12 comments</Text>
        </View>
      </View>

   <Pressable onPress={showAlert} style={({pressed})=>[{backgroundColor:'#2563EB',padding:16,margin:16,borderRadius:8,alignItems:'center'},pressed&&{opacity:.8}]}>
    <Text style={{color:'white',fontWeight:'700'}}>Alert</Text>
   </Pressable>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center'
  },
  scontainer: {
    height: '7%',
    flexDirection: 'row',
    paddingRight: '2%',
    paddingLeft: '2%',
    alignItems: 'center'
  },
  commentContainer: {
    height: '3%',
    flexDirection: 'row',
    marginTop: '2%',
    paddingRight: '2%',
    paddingLeft: '2%',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '63%',
  },
  profile: {
    width: '13%',
    aspectRatio: 1,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    marginRight: '2%'
  },
  sprofile: {
    width: '7%',
    aspectRatio: 1,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  text: {
    flexDirection: 'row',
    paddingLeft: '2%',
  },
  post: {
    height: "100%",
    width: '100%',
  },
  icon: {
    width:'7%',
    aspectRatio: 1,
    marginRight: '3%'
  }
});