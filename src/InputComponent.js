import { Input } from "react-native-elements";


export default function InputComponent({flexPlaceholder,value, onChangeText}) {
  return (
    <Input
      placeholder={flexPlaceholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
