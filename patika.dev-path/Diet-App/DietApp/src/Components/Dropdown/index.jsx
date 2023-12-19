import { useState } from 'react'
import { View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import styles from "./Dropdown.Style"
import data from "./helperData"


const DropdownComp = ({ onChange, value, onBlur }) => {
  // const [value, setValue] = useState(null);

  return (
    <SelectDropdown
      dropdownStyle={styles.dropdown}
      rowStyle={styles.rowStyle}
      buttonStyle={styles.buttonStyle}
      data={data}
      value={() => value()}
      onSelect={(selectedItem) => {
        onChange(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        return item
      }}
    />
  )
}

export default DropdownComp