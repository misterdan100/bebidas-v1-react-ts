import { StateCreator } from "zustand";
import { FavoriteSliceType } from "./favoriteSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void 
    hiddeNotification: () => void
}

export const createNotificacionSlice : StateCreator<NotificationSliceType & FavoriteSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false,
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hiddeNotification()
        }, 3000);
    },
    hiddeNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false,
            },
        })
    }
})