import Header from "../components/Header";
import { Outlet } from 'react-router-dom'
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [])
  return (
    <>
        <Header />
        <main className="container px-3 py-10 mx-auto">
            <Outlet />
        </main>
        <Modal />
        <Notification />
    </>
  )
}
