import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

 config = {
  navigationBarTitleText: '首页'
 }

 componentWillMount () { }

 componentWillReact () {
  console.log('componentWillReact')
 }

 componentDidMount () { }

 componentWillUnmount () {
  console.log('componentWillUnmount')
 }

 componentDidShow () { }

 componentDidHide () {
  console.log('componentDidHide')
 }

 increment = () => {
  const { counterStore } = this.props
  counterStore.increment()
 }

 decrement = () => {
  const { counterStore } = this.props
  counterStore.decrement()
 }

 incrementAsync = () => {
  const { counterStore } = this.props
  counterStore.incrementAsync()
  Taro.showToast({
   title: '敬请期待',
   icon: 'none'
  })
  this.$preload('key', 'val')
  Taro.navigateTo({
   url: '/pages/classify/classify',
   success: () => {
    console.log('跳转');
   }
  })
 }

 render () {
  const { counterStore: { counter } } = this.props
  return (
   <View className='index'>
    <Button onClick={this.increment}>+</Button>
    <Button onClick={this.decrement}>-</Button>
    <Button onClick={this.incrementAsync}>Add Async</Button>
    <Text>{counter}</Text>
   </View>
  )
 }
}

export default Index
