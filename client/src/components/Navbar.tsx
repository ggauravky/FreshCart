import { BikeIcon, ChevronDownIcon, MenuIcon, SearchIcon, ShoppingCartIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const user:any = {name:"Gaurav", email:"gaurav@example.com",isAdmin:true}
    const {cartCount , setIsCartOpen} = {
        cartCount: 5,
        setIsCartOpen: (_data:any) => {}
    };
    const [searchQuery, setSearchQuery] = useState("");
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
            {/* {Logo} */}
            <Link to="/" className="flex items-center gap-2 text-[22px] font-medium shrink-0">
                <BikeIcon size={24} /> FreshCart
            </Link>
            <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
                {/* {nav links} */}
                <div className="hidden lg:flex items-center gap-6 text-sm text-zinc-600">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/deals" className="text-app-orange">Deals</Link>
                </div>
                {/* {search bar} */}
                <form className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
                    <div className="relative w-full">
                        <SearchIcon className="absolute left-2.5 top-1/2-translate-y-1/2 size-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </form>

                {/* {Right actions are here} */}
                <div className="flex items-center gap-3">
                    {/* "cart" */}
                    <button className="relative p-2 rounded-xl"onClick={() => setIsCartOpen(true)}>
                        <ShoppingCartIcon className="size-5 text-zinc-900" />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 size-4 bg-app-orange text-white text-[10px] rounded-full flex flex-center">{cartCount}</span>}
                    </button>
                    {/* "user" */}
                    <div className="relative">
                        {user ? (
                            <button className="flex items-center gap-2 p-2">
                                <div className="size-7 rounded-full bg-green-950 text-white flex-center">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <ChevronDownIcon className="size-3 text-zinc-500" />
                            </button>
                        )
                        :(
                            <div className="flex-center gap-2">
                                <Link to="/login" className="hidden md:flex item-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-950-light transition-colors">Login</Link>
                                {userMenuOpen ? <XIcon className="md:hidden" onClick={()=>setUserMenuOpen(!userMenuOpen)}/> :<MenuIcon className="md:hidden" onClick={()=>setUserMenuOpen(!userMenuOpen)}/>}
                            </div>
                        )}

                        {userMenuOpen && (
                            <>

                            <div className="fixed insert-0 z-40" onClick={()=>setUserMenuOpen(false)}/>
                            <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow--lg border border-app-border py-2 z-50 animate-fade-in">
                                    {user &&(
                                        <div className="px-4 py-2 border-b border-app-border">
                                                <p className="text-sm font-medium text-zinc-900">
                                                    {user?.name}
                                                </p>
                                                <p className="text-xs text-zinc-500">
                                                    {user?.email}
                                                </p>
                                        </div>
                                    )

                                    }
                            </div>
                            
                            </>
                        )}

                    </div>
                </div>

            </div>
        </div>

    </nav>
  )
}

export default Navbar