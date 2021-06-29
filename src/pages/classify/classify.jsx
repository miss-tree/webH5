import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, ScrollView } from '@tarojs/components'
import { inject } from '@tarojs/mobx'

@inject('counterStore')
class Classify extends Component {
 config = {
  navigationBarTitleText: '测试页面'
 }
 // 数据请求在componentWillMount
 componentWillMount () {
  console.log('preload: ', this.$router.preload.key)
 }

 componentDidMount () {
  console.log('this.$componentType', this.$componentType, this.props, this.context);
 }
 componentDidShow () { }

 componentWillUnmount () { }
 componentDidHide () { }
 getToBar () {
  console.log('Classify  getToBar')
  Taro.navigateTo({
   url: '/pages/index/index',
   complete: () => {
    alert('这是一个跳转到首页')
   },
   success: function (res) {
    alert('这是一个跳转到首页')
    console.log('这是一个跳转到首页');
   }
  })
 }
 render () {
  return (
   <View>
    <Button onClick={this.getToBar}>
     hello world
    </Button>
   </View>
  )
 }
}

export default Classify