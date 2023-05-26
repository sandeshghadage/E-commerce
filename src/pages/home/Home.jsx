import React from 'react'
import style from './Home.module.css'
import { headerImg } from './data'
import Button from '@mui/material/Button';
import AppsIcon from '@mui/icons-material/Apps';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { sideBarList } from './data';
import HomeListCard from '../../components/cards/homeListCard/homeListCard';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
  return (
      <div>
          <div>
              <div className={style.header}>
                  <div className={style.leftSection}>
                  <img src={headerImg} alt="headerImg" className={style.headerImg} />
                  <h3>E-Commerce</h3>
                  </div>
                  <div className={style.middleSection}>
                      <div className={style.searchBar}>
                      <SearchIcon/>
                      <input type="text" placeholder='Search for products...'/>
                  </div>
                  </div>
                  <div className={style.rightSection}>
                      <Button startIcon={<AppsIcon fontSize={'large'} /> } variant='outlineed'>Categories</Button>
                      <Button onClick={()=>navigate('/bag')} startIcon={<WorkOutlineIcon fontSize={'large'}/> } variant='outlineed'>Bag</Button>
                      <Button startIcon={<PersonOutlineIcon fontSize={'large'}/> } variant='outlineed'>Account</Button>
                  </div>
              </div>
              <div className={style.body}> 
              <div className={style.leftSideBar}>
                  {sideBarList.map((item, i) => (
                      <div key={i} className={style.sideBarItem}>{item}</div>
                  ))}
              </div>
              <div>
                  <div className={style.midSection}>
                  <HomeListCard/>
                      
                  </div>
             </div>
              </div>
          </div>
    </div>
  )
}

