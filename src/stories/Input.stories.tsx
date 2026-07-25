import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from '../components/Input/Input'

const meta = {
    component: Input,
    title: "Input",
    tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>



export const Default: Story = {
    render: () => (
        <Input className="">
            <div className="flex flex-col mb-2">
                <Input.Label className="">Payment</Input.Label>
                <Input.Description className="">Enter your rent amount here.</Input.Description>
            </div>
        </Input>
    )
}