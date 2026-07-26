import { Meta, StoryObj } from '@storybook/react-vite'
import Image from '../components/Image/Image'

const meta = {
    component: Image,
    title: "Image",
    tags: ["autodocs"]
} satisfies Meta<typeof Image>
export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        imageUrl: ""
    },
    
    render: () => (
        <Image 
            imageUrl="https://tse4.mm.bing.net/th/id/OIP.ayACpdslq2Oq9hSUQnfMWQHaF1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
            className="w-30"
        >
            <Image.Cover>
                <Image.Info className="flex flex-col items-center justify-center">
                    <p>Ryan</p>
                    <p>07/26/2026</p>
                </Image.Info>
            </Image.Cover>
        </Image>
    )
}

