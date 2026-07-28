import type { Meta, StoryObj } from '@storybook/react-vite'
import Image from '../components/Image/Image.js'

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
            imageUrl="https://images.pexels.com/photos/31284696/pexels-photo-31284696.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31284696.jpg&fm=jpg" 
            className="w-50"
        >
            <Image.Info className="flex flex-col items-center justify-center text-white">
                <p>Caption</p>
                <p className="text-xs font-light">07/26/2026</p>
            </Image.Info>
        </Image>
    )
}

