import { create } from 'zustand'
import { type Food } from '../types'

interface State {
    currentTheme: string
    sections: Food[]
    changeTheme: () => void
    handleSections: (limit: number) => Promise<void>
}

export const useStore = create<State>()((set, get) => {
    return {
        sections: [],
        currentTheme: 'dark',

        handleSections: async (limit: number) => {
            fetch('http://localhost:5173/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('~ Res is not ok');
                }
                return res.json();
            })
            .then(json => {
                console.log(`~ Json enviado: `)
                set({ sections: json });
            })
            .catch(error => {
                console.error(`~ Error fetch ${error}`);
            });
        },

        changeTheme: () => {
            const { currentTheme } = get()
            const postTheme = currentTheme == 'dark' ? 'light': 'dark'
            set({ currentTheme: postTheme })
        }
    }
})