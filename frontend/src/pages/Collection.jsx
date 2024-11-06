import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {


  const {products,search,showSearch}=useContext(ShopContext);
  const [showFilter,setshowFilter]=useState(true)
  const [filterProducts,setfilterProducts] = useState([])
  const [Category,setCategory]=useState([])
  const [SubCategory,setSubCategory]=useState([])
  const [sortType,setSortType]=useState('relavent')

  const toggleCategory=(e)=>{
        
      if(Category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item !== e.target.value))
      }
      else{
        setCategory(prev=>[...prev,e.target.value])
      }
  }

  const toggleSubCategory=(e)=>{
        
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
}

const applyfilter=()=>{
  let productsCopy=products.slice()

  if(showSearch && search){
    productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(Category.length>0){
    productsCopy= productsCopy.filter(item=>Category.includes(item.category))
  }

  if(SubCategory.length>0){
    productsCopy= productsCopy.filter(item=>SubCategory.includes(item.subCategory))
  }

  setfilterProducts(productsCopy)
}

const sortProduct=()=>{

  let fpCopy=filterProducts.slice()

  switch(sortType){
    case 'low-high':
      setfilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;

      case 'high-low':
      setfilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;

      default:
        applyfilter();
        break;
  }

}

  useEffect(()=>{
      applyfilter()
  },[Category,SubCategory,search,showSearch])

  useEffect(()=>{
     sortProduct()
  },[sortType])

  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
           {/* filter Option  */}
        <div className='min-w-60'>
            <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
              <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
            </p>
            {/* category filter  */}
            <div className={`border border-gray-300 pl-5 py-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
                    </p>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
                    </p>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
                    </p>
                </div>
            </div>
            
            <div className={`border border-gray-300 pl-5 py-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>TYPE</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Top-Wear
                    </p>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottom-Wear
                    </p>
                    <p className='flex gap-2'>
                       <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winter-Wear
                    </p>
                </div>
            </div>
        </div>
         {/* right side  */}
        <div className='flex-1'>

            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL'} text2={"COLLECTION"}/>
                {/* product sort  */}
                <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
                       <option value="relavent">Sort By: Relavent</option>
                       <option value="low-high">Sort By: Low To High</option>
                       <option value="high-low">Sort By: High To Low</option>
                </select>
            </div>

            {/* map products  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                  filterProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                  ))
                }
            </div>

        </div>
    </div>
  )
}

export default Collection