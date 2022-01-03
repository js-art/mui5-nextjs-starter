


import { Button } from "@mui/material"
import CButton from "./CButton"


export default {
    title: 'Form/Control/‌Button',
    component: Button,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] }, }
    }
}
const Template = (args) => <Button {...args} />;
export const Success = () => <Button variant="contained" color="success">Click here</Button>
export const Primary = () => <Button variant="contained" >درست شد</Button>

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'hi',
    variant: 'contained'
};

Success.storyName = "Success Button"