import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {Dashboard} from '../pages/dashboard/Dashboard'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import {JobPosting} from "../pages/post-job/JobPosting";
import {JobListings} from "../pages/jobs/JobListings";
import {Users} from "../pages/users/Users";
import {ApplicationsReview} from "../pages/applicationsReview/ApplicationsReview";
import {EditJobDetails} from "../pages/post-job/EditJobDetails";
import {Profile} from "../pages/users/profiles/Profile";
import {ProfileSettings} from "../pages/users/profiles/ProfileSettings";

const PrivateRoutes = () => {
    //const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                {/* Redirect to Dashboard after success login/registration */}
                <Route path='auth/*' element={<Navigate to='/dashboard'/>}/>
                {/* Pages */}
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='/post-job' element={<JobPosting/>}/>
                <Route path='/job-listings' element={<JobListings/>}/>
                <Route path='/applications-review/:id' element={<ApplicationsReview/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/edit-job/:id' element={<EditJobDetails/>}/>
                <Route path='/users/:userId' element={<Profile/>}/>
                <Route path='/profile/settings' element={<ProfileSettings/>}/>
                <Route path='/files/:fileId' element={<EditJobDetails/>}/>

                {/*<Route path='/about' element={<About/>}/>*/}
                {/* Lazy Modules */}
                {/*<Route
                    path='apps/user-management/*'
                    element={
                        <SuspensedView>
                            <UsersPage/>
                        </SuspensedView>
                    }
                />*/}
                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404'/>}/>
            </Route>
        </Routes>
    )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
    const baseColor = getCSSVariableValue('--kt-primary')
    TopBarProgress.config({
        barColors: {
            '0': baseColor,
        },
        barThickness: 1,
        shadowBlur: 5,
    })
    return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>
}

export {PrivateRoutes}
