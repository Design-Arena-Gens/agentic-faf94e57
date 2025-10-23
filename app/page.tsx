'use client'

import { useState } from 'react'
import styles from './page.module.css'

type DressItem = {
  id: string
  name: string
  type: 'dress' | 'top' | 'bottom' | 'shoes'
  color: string
  pattern?: string
}

type Jewelry = {
  id: string
  name: string
  type: 'necklace' | 'earrings' | 'bracelet' | 'ring'
  color: string
}

type Makeup = {
  type: 'lipstick' | 'eyeshadow' | 'blush'
  color: string
}

export default function Home() {
  const [selectedDress, setSelectedDress] = useState<DressItem | null>(null)
  const [selectedTop, setSelectedTop] = useState<DressItem | null>(null)
  const [selectedBottom, setSelectedBottom] = useState<DressItem | null>(null)
  const [selectedShoes, setSelectedShoes] = useState<DressItem | null>(null)
  const [selectedJewelry, setSelectedJewelry] = useState<Jewelry[]>([])
  const [selectedMakeup, setSelectedMakeup] = useState<Makeup[]>([])
  const [activeTab, setActiveTab] = useState<'wardrobe' | 'jewelry' | 'makeup'>('wardrobe')
  const [wardrobeOpen, setWardrobeOpen] = useState(true)

  const dresses: DressItem[] = [
    { id: 'd1', name: 'Pink Gown', type: 'dress', color: '#ff69b4', pattern: 'sparkle' },
    { id: 'd2', name: 'Blue Dress', type: 'dress', color: '#4169e1', pattern: 'floral' },
    { id: 'd3', name: 'Red Evening', type: 'dress', color: '#dc143c', pattern: 'solid' },
    { id: 'd4', name: 'Purple Cocktail', type: 'dress', color: '#9370db', pattern: 'shimmer' },
  ]

  const tops: DressItem[] = [
    { id: 't1', name: 'White Blouse', type: 'top', color: '#ffffff' },
    { id: 't2', name: 'Pink Top', type: 'top', color: '#ffb6c1' },
    { id: 't3', name: 'Blue Shirt', type: 'top', color: '#87ceeb' },
  ]

  const bottoms: DressItem[] = [
    { id: 'b1', name: 'Denim Skirt', type: 'bottom', color: '#6495ed' },
    { id: 'b2', name: 'Black Pants', type: 'bottom', color: '#2c2c2c' },
    { id: 'b3', name: 'Pink Skirt', type: 'bottom', color: '#ff1493' },
  ]

  const shoes: DressItem[] = [
    { id: 's1', name: 'Pink Heels', type: 'shoes', color: '#ff69b4' },
    { id: 's2', name: 'Silver Heels', type: 'shoes', color: '#c0c0c0' },
    { id: 's3', name: 'Red Pumps', type: 'shoes', color: '#ff0000' },
    { id: 's4', name: 'Gold Sandals', type: 'shoes', color: '#ffd700' },
  ]

  const jewelry: Jewelry[] = [
    { id: 'j1', name: 'Diamond Necklace', type: 'necklace', color: '#e0e0e0' },
    { id: 'j2', name: 'Pearl Necklace', type: 'necklace', color: '#fff5ee' },
    { id: 'j3', name: 'Ruby Earrings', type: 'earrings', color: '#e0115f' },
    { id: 'j4', name: 'Gold Earrings', type: 'earrings', color: '#ffd700' },
    { id: 'j5', name: 'Silver Bracelet', type: 'bracelet', color: '#c0c0c0' },
    { id: 'j6', name: 'Gold Ring', type: 'ring', color: '#ffd700' },
  ]

  const lipstickColors = ['#ff6b9d', '#ff1493', '#dc143c', '#8b0000', '#ff69b4']
  const eyeshadowColors = ['#dda0dd', '#9370db', '#4169e1', '#87ceeb', '#b8860b']
  const blushColors = ['#ffb6c1', '#ff69b4', '#ff1493', '#ff6b9d']

  const handleDressClick = (item: DressItem) => {
    if (item.type === 'dress') {
      setSelectedDress(selectedDress?.id === item.id ? null : item)
      setSelectedTop(null)
      setSelectedBottom(null)
    } else if (item.type === 'top') {
      setSelectedTop(selectedTop?.id === item.id ? null : item)
      setSelectedDress(null)
    } else if (item.type === 'bottom') {
      setSelectedBottom(selectedBottom?.id === item.id ? null : item)
      setSelectedDress(null)
    } else if (item.type === 'shoes') {
      setSelectedShoes(selectedShoes?.id === item.id ? null : item)
    }
  }

  const handleJewelryClick = (item: Jewelry) => {
    const index = selectedJewelry.findIndex(j => j.id === item.id)
    if (index > -1) {
      setSelectedJewelry(selectedJewelry.filter(j => j.id !== item.id))
    } else {
      const sameType = selectedJewelry.filter(j => j.type === item.type)
      if (sameType.length > 0) {
        setSelectedJewelry([...selectedJewelry.filter(j => j.type !== item.type), item])
      } else {
        setSelectedJewelry([...selectedJewelry, item])
      }
    }
  }

  const handleMakeupClick = (type: Makeup['type'], color: string) => {
    const existing = selectedMakeup.find(m => m.type === type)
    if (existing?.color === color) {
      setSelectedMakeup(selectedMakeup.filter(m => m.type !== type))
    } else {
      setSelectedMakeup([...selectedMakeup.filter(m => m.type !== type), { type, color }])
    }
  }

  const resetAll = () => {
    setSelectedDress(null)
    setSelectedTop(null)
    setSelectedBottom(null)
    setSelectedShoes(null)
    setSelectedJewelry([])
    setSelectedMakeup([])
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Barbie Dress Up</h1>
          <button className={styles.resetButton} onClick={resetAll}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Reset
          </button>
        </header>

        <div className={styles.content}>
          <div className={styles.dollContainer}>
            <div className={styles.doll}>
              {/* Head */}
              <div className={styles.head}>
                <div className={styles.hair}></div>
                <div className={styles.face}>
                  {selectedMakeup.find(m => m.type === 'eyeshadow') && (
                    <div
                      className={styles.eyeshadow}
                      style={{ backgroundColor: selectedMakeup.find(m => m.type === 'eyeshadow')?.color }}
                    />
                  )}
                  <div className={styles.eyes}>
                    <div className={styles.eye}></div>
                    <div className={styles.eye}></div>
                  </div>
                  {selectedJewelry.find(j => j.type === 'earrings') && (
                    <>
                      <div
                        className={`${styles.earring} ${styles.earringLeft}`}
                        style={{ backgroundColor: selectedJewelry.find(j => j.type === 'earrings')?.color }}
                      />
                      <div
                        className={`${styles.earring} ${styles.earringRight}`}
                        style={{ backgroundColor: selectedJewelry.find(j => j.type === 'earrings')?.color }}
                      />
                    </>
                  )}
                  {selectedMakeup.find(m => m.type === 'blush') && (
                    <>
                      <div
                        className={`${styles.blush} ${styles.blushLeft}`}
                        style={{ backgroundColor: selectedMakeup.find(m => m.type === 'blush')?.color }}
                      />
                      <div
                        className={`${styles.blush} ${styles.blushRight}`}
                        style={{ backgroundColor: selectedMakeup.find(m => m.type === 'blush')?.color }}
                      />
                    </>
                  )}
                  <div className={styles.nose}></div>
                  <div
                    className={styles.lips}
                    style={{
                      backgroundColor: selectedMakeup.find(m => m.type === 'lipstick')?.color || '#ff69b4'
                    }}
                  ></div>
                </div>
                {selectedJewelry.find(j => j.type === 'necklace') && (
                  <div
                    className={styles.necklace}
                    style={{ borderColor: selectedJewelry.find(j => j.type === 'necklace')?.color }}
                  />
                )}
              </div>

              {/* Body */}
              <div className={styles.body}>
                {selectedDress && (
                  <div
                    className={styles.dress}
                    style={{
                      backgroundColor: selectedDress.color,
                      backgroundImage: selectedDress.pattern === 'sparkle'
                        ? 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)'
                        : selectedDress.pattern === 'floral'
                        ? 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)'
                        : 'none',
                      backgroundSize: selectedDress.pattern === 'sparkle' ? '10px 10px' : '20px 20px'
                    }}
                  />
                )}
                {selectedTop && !selectedDress && (
                  <div
                    className={styles.top}
                    style={{ backgroundColor: selectedTop.color }}
                  />
                )}
                {selectedBottom && !selectedDress && (
                  <div
                    className={styles.bottom}
                    style={{ backgroundColor: selectedBottom.color }}
                  />
                )}
                {selectedJewelry.find(j => j.type === 'bracelet') && (
                  <div
                    className={styles.bracelet}
                    style={{ backgroundColor: selectedJewelry.find(j => j.type === 'bracelet')?.color }}
                  />
                )}
                {selectedJewelry.find(j => j.type === 'ring') && (
                  <div
                    className={styles.ring}
                    style={{ backgroundColor: selectedJewelry.find(j => j.type === 'ring')?.color }}
                  />
                )}
              </div>

              {/* Legs */}
              <div className={styles.legs}>
                <div className={styles.leg}></div>
                <div className={styles.leg}></div>
              </div>

              {/* Shoes */}
              {selectedShoes && (
                <div className={styles.shoesContainer}>
                  <div
                    className={styles.shoe}
                    style={{ backgroundColor: selectedShoes.color }}
                  />
                  <div
                    className={styles.shoe}
                    style={{ backgroundColor: selectedShoes.color }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={`${styles.panel} ${wardrobeOpen ? styles.panelOpen : ''}`}>
            <button
              className={styles.panelToggle}
              onClick={() => setWardrobeOpen(!wardrobeOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transform: wardrobeOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'wardrobe' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('wardrobe')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Wardrobe
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'jewelry' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('jewelry')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Jewelry
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'makeup' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('makeup')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3L12 7L16 8L13 11L14 15L10 13L6 15L7 11L4 8L8 7L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Makeup
              </button>
            </div>

            <div className={styles.panelContent}>
              {activeTab === 'wardrobe' && (
                <>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Dresses</h3>
                    <div className={styles.itemGrid}>
                      {dresses.map(dress => (
                        <button
                          key={dress.id}
                          className={`${styles.item} ${selectedDress?.id === dress.id ? styles.itemSelected : ''}`}
                          onClick={() => handleDressClick(dress)}
                        >
                          <div
                            className={styles.itemPreview}
                            style={{
                              backgroundColor: dress.color,
                              backgroundImage: dress.pattern === 'sparkle'
                                ? 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)'
                                : dress.pattern === 'floral'
                                ? 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)'
                                : 'none',
                              backgroundSize: dress.pattern === 'sparkle' ? '8px 8px' : '15px 15px'
                            }}
                          />
                          <span className={styles.itemName}>{dress.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Tops</h3>
                    <div className={styles.itemGrid}>
                      {tops.map(top => (
                        <button
                          key={top.id}
                          className={`${styles.item} ${selectedTop?.id === top.id ? styles.itemSelected : ''}`}
                          onClick={() => handleDressClick(top)}
                        >
                          <div
                            className={styles.itemPreview}
                            style={{ backgroundColor: top.color }}
                          />
                          <span className={styles.itemName}>{top.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Bottoms</h3>
                    <div className={styles.itemGrid}>
                      {bottoms.map(bottom => (
                        <button
                          key={bottom.id}
                          className={`${styles.item} ${selectedBottom?.id === bottom.id ? styles.itemSelected : ''}`}
                          onClick={() => handleDressClick(bottom)}
                        >
                          <div
                            className={styles.itemPreview}
                            style={{ backgroundColor: bottom.color }}
                          />
                          <span className={styles.itemName}>{bottom.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Shoes</h3>
                    <div className={styles.itemGrid}>
                      {shoes.map(shoe => (
                        <button
                          key={shoe.id}
                          className={`${styles.item} ${selectedShoes?.id === shoe.id ? styles.itemSelected : ''}`}
                          onClick={() => handleDressClick(shoe)}
                        >
                          <div
                            className={styles.itemPreview}
                            style={{ backgroundColor: shoe.color }}
                          />
                          <span className={styles.itemName}>{shoe.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'jewelry' && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Accessories</h3>
                  <div className={styles.itemGrid}>
                    {jewelry.map(item => (
                      <button
                        key={item.id}
                        className={`${styles.item} ${selectedJewelry.find(j => j.id === item.id) ? styles.itemSelected : ''}`}
                        onClick={() => handleJewelryClick(item)}
                      >
                        <div
                          className={styles.itemPreview}
                          style={{ backgroundColor: item.color }}
                        />
                        <span className={styles.itemName}>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'makeup' && (
                <>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Lipstick</h3>
                    <div className={styles.colorGrid}>
                      {lipstickColors.map((color, index) => (
                        <button
                          key={`lip-${index}`}
                          className={`${styles.colorSwatch} ${selectedMakeup.find(m => m.type === 'lipstick' && m.color === color) ? styles.colorSwatchSelected : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleMakeupClick('lipstick', color)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Eyeshadow</h3>
                    <div className={styles.colorGrid}>
                      {eyeshadowColors.map((color, index) => (
                        <button
                          key={`eye-${index}`}
                          className={`${styles.colorSwatch} ${selectedMakeup.find(m => m.type === 'eyeshadow' && m.color === color) ? styles.colorSwatchSelected : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleMakeupClick('eyeshadow', color)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Blush</h3>
                    <div className={styles.colorGrid}>
                      {blushColors.map((color, index) => (
                        <button
                          key={`blush-${index}`}
                          className={`${styles.colorSwatch} ${selectedMakeup.find(m => m.type === 'blush' && m.color === color) ? styles.colorSwatchSelected : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleMakeupClick('blush', color)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
