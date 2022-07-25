import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import AddTaskIcon from '@mui/icons-material/AddTask'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined'
import SystemUpdateOutlinedIcon from '@mui/icons-material/SystemUpdateOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/Logout'
import AddBlog from '../AddBlog/AddBlog'
import DeleteBlog from '../DeleteBlog/DeleteBlog'
import UpdateBlog from '../UpdateBlog/UpdateBlog'
import AllBlogs from '../AllBlogs/AllBlogs'
import AddEmployee from '../AddEmployee/AddEmployee'
import Login from '../Login/Login'
import Admin from '../admin'
const drawerWidth = 240
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

function Dashboard() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [blog, setblog] = useState(false)
  const [deleteblog, setDeleteBlog] = useState(false)
  const [updateblog, setUpdateBlog] = useState(false)
  const [allblog, setAllBlog] = useState(false)
  const [employee, setEmployee] = useState(false)
  const [logout, setLogout] = useState(false)
  const [enable, setEnable] = useState(false)
  useEffect(() => {
    setEnable(true)
  }, [])
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  function handleblog() {
    setblog(true)
    setDeleteBlog(false)
    setUpdateBlog(false)
    setAllBlog(true)
    setEmployee(false)
    setLogout(false)
  }
  function handledelete() {
    setblog(false)
    setUpdateBlog(false)
    setAllBlog(true)
    setDeleteBlog(true)
    setEmployee(false)
    setLogout(false)
  }
  function handleupdate() {
    setblog(false)
    setUpdateBlog(true)
    setAllBlog(true)
    setDeleteBlog(false)
    setEmployee(false)
    setLogout(false)
  }
  function handleAllblogs() {
    setblog(false)
    setUpdateBlog(false)
    setAllBlog(false)
    setDeleteBlog(false)
    setEmployee(false)
    setLogout(false)
  }
  function handleEmployee() {
    setblog(false)
    setUpdateBlog(false)
    setAllBlog(true)
    setDeleteBlog(false)
    setEmployee(true)
    setLogout(false)
  }
  function handleLogout() {
    setblog(false)
    setUpdateBlog(false)
    setAllBlog(true)
    setDeleteBlog(false)
    setEmployee(false)
    setLogout(true)
    setEnable(false)
    window.localStorage.setItem('login', false)
    window.location.reload(false)
  }
  return (
    <div className="container">
      {enable && (
        <div className="adminPanel">
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Admin Panel
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                <ListItem button key={'Add Blog'}>
                  <ListItemIcon>
                    <AddTaskIcon color="success" onClick={handleblog} />
                  </ListItemIcon>
                  <ListItemText primary="Add Blog" onClick={handleblog} />
                </ListItem>
                <ListItem button key={'Delete'}>
                  <ListItemIcon>
                    <DeleteSweepOutlinedIcon
                      style={{ color: 'red' }}
                      onClick={handledelete}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Delete" onClick={handledelete} />
                </ListItem>
                <ListItem button key={'Update Blogs'}>
                  <ListItemIcon>
                    <SystemUpdateOutlinedIcon
                      color="primary"
                      onClick={handleupdate}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Update Blogs" onClick={handleupdate} />
                </ListItem>
                <ListItem button key={'All Blogs'}>
                  <ListItemIcon>
                    <SummarizeOutlinedIcon
                      color="secondary"
                      onClick={handleAllblogs}
                    />
                  </ListItemIcon>
                  <ListItemText primary="All Blogs" onClick={handleAllblogs} />
                </ListItem>

                {/* <ListItemIcon>
                        {index === 0 && (
                          <AddTaskIcon color="success" onClick={handleblog} />
                        )}
                        {text === 'Delete Blog' && (
                          <DeleteSweepOutlinedIcon
                            style={{ color: 'red' }}
                            onClick={handledelete}
                          />
                        )}
                        {text === 'Update Blog' && (
                          <SystemUpdateOutlinedIcon
                            color="primary"
                            onClick={handleupdate}
                          />
                        )}
                        {text === 'All Blogs' && (
                          <SummarizeOutlinedIcon
                            color="secondary"
                            onClick={handleAllblogs}
                          />
                        )}
                      </ListItemIcon> */}
                {/* <ListItemText primary='Add Blog' onClick={handleblog}/>
                      <ListItemText primary='Delete' onClick={handledelete}/> */}
              </List>
              <Divider />
              <List>
                {['Add Employee'].map((text, index) => (
                  <ListItem button key={text} onClick={handleEmployee}>
                    <ListItemIcon>
                      <BadgeOutlinedIcon
                        color="action"
                        onClick={handleEmployee}
                      />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['Log Out'].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    style={{ color: 'red' }}
                    onClick={handleLogout}
                  >
                    <ListItemIcon>
                      <LogoutIcon
                        style={{ color: 'red' }}
                        onClick={handleLogout}
                      />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
              {blog && (
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4"></div>
                  <div
                    className="col-sm-6 col-md-8 col-lg-8"
                    style={{ justifyContent: 'center' }}
                  >
                    <AddBlog></AddBlog>
                  </div>
                </div>
              )}
              {deleteblog && (
                <div className="row">
                  <div className="col-xs-0 col-sm-0 col-md-6 col-lg-5"></div>
                  <div
                    className="col-xs-0 col-sm-12 col-md-6 col-lg-7"
                    style={{ justifyContent: 'center' }}
                  >
                    <DeleteBlog></DeleteBlog>
                  </div>
                </div>
              )}
              {updateblog && (
                <div className="row">
                <div className="col-sm-0 col-md-2 col-lg-1"></div>
                <div
                  className="col-sm-12 col-md-10 col-lg-11"
                  style={{ justifyContent: 'center' }}
                >
                 <UpdateBlog></UpdateBlog>
                </div>
                </div>
              )}
              {!allblog && (
                <div className="row">
                <div className="col-sm-0 col-md-2 col-lg-1"></div>
                <div
                  className="col-sm-12 col-md-10 col-lg-11"
                  style={{ justifyContent: 'center' }}
                >
                  <AllBlogs></AllBlogs>
                </div>
                </div>
              )}
              {employee && (
                <div className="row">
                <div className="col-sm-0 col-md-4 col-lg-4"></div>
                <div
                  className="col-sm-12 col-md-8 col-lg-8"
                  style={{ justifyContent: 'center' }}
                >
                  <AddEmployee></AddEmployee>
                </div>
                </div>
              )}
              {logout && <Login replace={true}></Login>}
            </Main>
          </Box>
        </div>
      )}
      {!enable && (
        <div>
          <Admin replace={true}></Admin>
        </div>
      )}
    </div>
  )
}
export default Dashboard
