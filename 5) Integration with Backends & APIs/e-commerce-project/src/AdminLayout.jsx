import React from 'react';
import AdminHeader from './Components/Admin/AdminHeader';
import AdminSidebar from './Components/Admin/AdminSidebar'
import AdminContain from './Components/Admin/AdminContain';
import AdminFooter from './Components/Admin/AdminFooter';

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <AdminContain />
      <AdminFooter />
    </>
  )
}
