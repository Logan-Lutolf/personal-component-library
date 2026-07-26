import type { Meta, StoryObj } from '@storybook/react-vite'
import NavMenu from '../components/NavMenu/NavMenu'

const meta = {
    component: NavMenu,
    title: "NavMenu",
    tags: ["autodocs"],
} satisfies Meta<typeof NavMenu>

export default meta
type Story = StoryObj<typeof meta>



export const Default: Story = {
    
    
    render: () => (
        <NavMenu className="">
            <NavMenu.List className="">
                <NavMenu.Item>
                    Home
                </NavMenu.Item>

                <NavMenu.Item>
                    Galleries
                    <NavMenu.Content>
                        <NavMenu.ListItem className="rounded-t-lg">Featured</NavMenu.ListItem>
                        <NavMenu.ListItem>Higgins</NavMenu.ListItem>
                        <NavMenu.ListItem className="rounded-b-lg">St Maartin</NavMenu.ListItem>
                    </NavMenu.Content>
                </NavMenu.Item>

                <NavMenu.Item>
                    About
                </NavMenu.Item>

                <NavMenu.Item>
                    Contact
                </NavMenu.Item>
            </NavMenu.List>
        </NavMenu>
    )
}