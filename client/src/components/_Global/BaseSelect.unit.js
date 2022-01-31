import { mount, config } from '@vue/test-utils'
import BaseSelect from './BaseSelect.vue'
import BaseErrorMessage from './BaseErrorMessage'

config.global.components = {
  BaseErrorMessage
}

describe('[<BaseSelect/> Component]', () => {
  let wrapper
  const optionsProp = ['All', 'wood', 'steel', 'cotton']

  function createComponent () {
    wrapper = mount(BaseSelect, {
      propsData: {
        options: optionsProp
      }
    })
  }

  beforeEach(() => {
    createComponent()
  })

  test('it mounts', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('asserting required prop options', () => {
    expect(wrapper.props('options')).toStrictEqual(optionsProp)
  })

  test('selects an option element and updates v-model bound data', async () => {
    const options = wrapper.find('select').findAll('option')
    await options.at(3).setSelected()
    expect(wrapper.find('option:checked').element.value).toBe(optionsProp[3])
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(optionsProp[3])
  })

  test('if error prop passed it renders BaseErrorMessage Component', () => {
    const wrapper = mount(BaseSelect, {
      propsData: {
        options: ['All', 'wood', 'steel', 'cotton'],
        error: 'something is missing'
      }
    })
    expect(wrapper.findComponent(BaseErrorMessage))
  })

  test('if error prop not passed it does not renders BaseErrorMessage Component', () => {
    expect(() => wrapper.getComponent(BaseErrorMessage)).toThrow()
  })
})
