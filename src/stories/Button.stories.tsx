import Button from '../components/Button/Button'
import type { Meta, StoryObj } from '@storybook/react-vite';


const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: "primary",
        size: "sm",
    }
}

export const Secondary: Story = {
    args: {
        color: "secondary",
        size: "sm",
    }
}

export const Destructive: Story = {
    args: {
        color: "destructive",
        size: "sm",
    }
}

export const Ghost: Story = {
    args: {
        color: "ghost",
        size: "sm",
    }
}
