import React, {useState} from "react";
import {UserModel} from "../../shared/models/user.model";
import {deleteUser, updateUser} from "../../shared/services/user.service";
import CustomModal from "../../shared/components/CustomModal";
import {Role} from "../../shared/enums/roles.enum";
import {Button} from "../../shared/components/form/Button";
import {getEmployers, deleteEmployer} from "../../shared/services/employer.service";
import {CustomItemsDropdown} from "../../shared/components/CustomItemsDropdown";
import {useNavigate} from "react-router-dom";
import {ChangeUserRole} from "./ChangeUserRole";

type UserItemProps = {
    user: UserModel;
    updateUsers: () => void;
}

export const UserItem: React.FC<UserItemProps> = (props) => {
    const {
        user,
        updateUsers,
    } = props

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showActivationModal, setShowActivationModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const confirmRemovingUser = async () => {
        setLoading(true)
        try {
            if(user.role === Role.employer) {
                const employer = await getEmployers(`${user.id}`);
                if(employer[0]) {
                    await deleteEmployer(employer[0].id)
                }
            }
            await deleteUser(`${user.id}`);
            updateUsers();
            hideDeleteModal()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }
    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const confirmChangesToUser = async (updatedUser) => {
        setLoading(true)
        try {
            await updateUser(`${user.id}`, updatedUser)
            updateUsers();
            hideEditModal()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideEditModal = () => {
        setShowEditModal(false);
    }
    const openEditModal = () => {
        setShowEditModal(true);
    };

    const confirmUserActivation = async () => {
        setLoading(true)
        try {
            await updateUser(`${user.id}`, {active: !user.active});
            updateUsers();
            hideActivationModal()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };
    const hideActivationModal = () => {
        setShowActivationModal(false);
    }
    const openActivationModal = () => {
        setShowActivationModal(true);
    };

    return (
        <tr className="fw-semibold text-gray-800 align-middle">
            <td><span onClick={() => navigate(`/users/${user.id}`)} className="cursor-pointer">{user.name}</span></td>
            <td>{user.role}</td>
            {user.active ?
                <td><span className="badge badge-light-success">approved</span></td> :
                <td><span className="badge badge-light-danger">pending</span></td> }
            <td>
                <CustomItemsDropdown options={[
                    // {label: 'change role', onClick: openEditModal},
                    {label: 'view profile', onClick: () => navigate(`/users/${user.id}`)},
                    {label: 'delete', onClick: openDeleteModal},
                    {label: user.active ? 'deactivate' : 'activate', onClick: openActivationModal},
                ]}/>
            </td>
            <CustomModal
                show={showDeleteModal}
                onHide={hideDeleteModal}
                footer={
                    <div className="d-flex flex-row">
                        <Button type="button" onClick={confirmRemovingUser} state="success">Delete</Button>
                        <Button type="button" onClick={hideDeleteModal} state="danger">Cancel</Button>
                    </div>
                }
            >Are you sure you want to delete {user.name}?</CustomModal>
            <CustomModal title="Edit user" show={showEditModal} onHide={hideEditModal}>
                <ChangeUserRole userRole={user.role} confirmChangesToUser={confirmChangesToUser}/>
            </CustomModal>
            <CustomModal
                show={showActivationModal}
                onHide={hideActivationModal}
                footer={
                <div className="d-flex flex-row">
                    <Button type="button" onClick={confirmUserActivation} state="success">{user.active ? 'Deactivate account' : 'Activate account'}</Button>
                    <Button type="button" onClick={hideActivationModal} state="danger">Cancel</Button>
                </div>
                }
            >Are you sure you want to {user.active ? 'deactivate' : 'activate'} {user.name}'s account?</CustomModal>
        </tr>
    )
}