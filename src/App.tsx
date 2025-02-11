import React, { useState } from 'react';
import { 
  Search, 
  Layout, 
  Sun,
  ChevronDown,
  Home,
  Globe,
  ArrowUpDown,
  FileText,
  Wallet,
  Image,
  Gem,
  Layers,
  TrendingUp,
  DollarSign
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('Crypto');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Crypto':
        return (
          <div className="flex items-center justify-between bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F7931A] rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">₿</span>
              </div>
              <div>
                <div className="font-medium text-sm sm:text-base">Bitcoin</div>
                <div className="text-green-500 text-xs sm:text-sm">↗ 0.51%</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm sm:text-base">$32,568.46</div>
              <div className="text-gray-400 text-xs sm:text-sm">0.493461 BTC</div>
            </div>
          </div>
        );
      
      case 'NFTs':
        return (
          <div className="space-y-3">
            <div className="bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Image className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">Bored Ape #7834</div>
                    <div className="text-gray-400 text-xs sm:text-sm">BAYC Collection</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base">68.2 ETH</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Last sale: 65.1 ETH</div>
                </div>
              </div>
              <div className="relative h-32 sm:h-40 bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e" 
                  alt="NFT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">CryptoPunk #2140</div>
                    <div className="text-gray-400 text-xs sm:text-sm">CryptoPunks</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base">45.8 ETH</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Floor: 42.3 ETH</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'DeFi':
        return (
          <div className="space-y-3">
            <div className="bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">ETH/USDC LP</div>
                    <div className="text-green-500 text-xs sm:text-sm">APY: 12.4%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base">$12,453.21</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Staked: 4.2 ETH</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">USDC Lending</div>
                    <div className="text-green-500 text-xs sm:text-sm">APY: 8.2%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base">$8,234.65</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Supplied: 8,234 USDC</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-3 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">BTC Vault</div>
                    <div className="text-green-500 text-xs sm:text-sm">APY: 5.8%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base">$11,880.60</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Locked: 0.18 BTC</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-3 sm:p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full"></div>
          <div className="flex items-center">
            <span className="text-gray-300 text-sm sm:text-base">franksofocused.cb.id</span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </div>

      {/* Balance */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">$32,568.46</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 sm:space-x-4 mb-6 sm:mb-8">
        <button className="flex-1 bg-blue-500 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
          Buy
        </button>
        <button className="flex-1 bg-[#2A2A2A] text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
          Swap
        </button>
        <button className="flex-1 bg-[#2A2A2A] text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
          Cash out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-6 border-b border-gray-800">
        {['Crypto', 'NFTs', 'DeFi'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm sm:text-base ${
              activeTab === tab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Network Selector */}
      <button className="flex items-center space-x-2 bg-[#2A2A2A] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
        <span>All networks</span>
        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-gray-800 p-3 sm:p-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button className="text-gray-400">
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-gray-400">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-gray-400">
            <ArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-gray-400">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-blue-500">
            <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;