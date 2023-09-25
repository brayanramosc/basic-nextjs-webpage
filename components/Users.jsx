"use client"
import React, { useEffect } from 'react';

const Users = () => {
    useEffect(() => {
        alert('Users loaded!')
    }, [])

    return (
        <div>Users</div>
    )
}

export default Users;
