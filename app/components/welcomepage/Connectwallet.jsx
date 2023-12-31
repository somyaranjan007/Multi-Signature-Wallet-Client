import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { connectWallet, disconnect } from "@/app/redux/feature/connect-wallet-slice"
import { useDispatch, useSelector } from 'react-redux';

const Connectwallet = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.connectWalletReducer);
  console.log(userData);

  return (
    <div className="bg-white w-[40vh] flex flex-col items-center p-2 gap-4 border rounded-lg ">
      <div className="px-6 py-4 border-b rounded-t">
        <h3 className="text-base font-semibold text-gray-900 ">
          Connect wallet
        </h3>
        {/* <button onClick={() => dispatch(disconnect())}>diconnect</button> */}
      </div>

      <div className="p-6">
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
        <ul className="my-4 space-y-3">
          <li>
            <div onClick={() => { console.log("hello world"); dispatch(connectWallet())}} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow border">
              <img src="https://assets-global.website-files.com/636e894daa9e99940a604aef/63bb99fc3d3d7a0f906e49ed_Keplr-logo.png" className='w-20' />
              {/* <span className="flex-1 ml-3 whitespace-nowrap">Kepl</span> */}
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">Popular</span>
            </div>
          </li>
        </ul>
        <div>
          <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline ">
            <HelpOutlineIcon className='w-3 h-3 mr-2' />
            How to install Wallet? </a>
        </div>
      </div>
      
    </div>
    
  )
}

export default Connectwallet