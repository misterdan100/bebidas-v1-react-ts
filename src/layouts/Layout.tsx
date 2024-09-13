import Header from "../components/Header";
import { Outlet } from 'react-router-dom'
import Modal from "../components/Modal";

export default function Layout() {
  return (
    <>
        <Header />
        <main className="container px-3 py-10 mx-auto">
            <Outlet />
        </main>
        <Modal />
    </>
  )
}
