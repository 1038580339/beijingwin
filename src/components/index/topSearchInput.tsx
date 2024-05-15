import React, { useState } from "react"
import { AtSearchBar } from 'taro-ui'

const SearchInput = () => {
    const [value, setValue] = useState('' as string)
    const onChange = (val: string) => {
        setValue(val)
    }
    const onSearch = () => {
        console.log(value)
    }
    return <AtSearchBar value={value} onChange={onChange} onActionClick={onSearch} />
}

export default SearchInput