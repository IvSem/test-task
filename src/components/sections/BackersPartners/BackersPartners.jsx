import { useState, useRef, useLayoutEffect } from 'react';
import styles from './BackersPartners.module.scss';
import { TABS, ITEMS } from './data';
import Button from '@/components/ui/Button/Button.jsx';
import { RefreshCw } from 'lucide-react';

export default function BackersPartners() {
  const [activeTab, setActiveTab] = useState('all');
  const [lastRowIds, setLastRowIds] = useState([]);
  const [singleInRowIds, setSingleInRowIds] = useState([]);
  const [lastColumnIds, setLastColumnIds] = useState([]);
  const [maxGridHeight, setMaxGridHeight] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);

  const isDesktop = typeof window !== 'undefined' ? window.innerWidth > 768 : true;

  const filteredItems = activeTab === 'all' ? ITEMS : ITEMS.filter((item) => item.type === activeTab);

  useLayoutEffect(() => {
    if (!gridRef.current || !isDesktop) return;

    const grid = gridRef.current;
    const children = Array.from(grid.children);

    const rows = {};
    children.forEach((child) => {
      const top = child.offsetTop;
      if (!rows[top]) rows[top] = [];
      rows[top].push(child);
    });
    const rowValues = Object.values(rows);
    const lastRow = rowValues[rowValues.length - 1] || [];
    const single = children.length === 1 ? [children[0]] : [];

    const allColumns = {};
    children.forEach((child) => {
      const left = child.offsetLeft;
      if (!allColumns[left]) allColumns[left] = [];
      allColumns[left].push(child);
    });
    const maxLeft = Math.max(...Object.keys(allColumns).map(Number));
    const lastCols = allColumns[maxLeft] || [];

    const lastRowStr = lastRow.map((c) => c.dataset.id);
    const singleStr = single.map((c) => c.dataset.id);
    const lastColsStr = lastCols.map((c) => c.dataset.id);

    setLastRowIds((prev) => (prev.join(',') !== lastRowStr.join(',') ? lastRowStr : prev));
    setSingleInRowIds((prev) => (prev.join(',') !== singleStr.join(',') ? singleStr : prev));
    setLastColumnIds((prev) => (prev.join(',') !== lastColsStr.join(',') ? lastColsStr : prev));
  }, [filteredItems, isDesktop]);

  useLayoutEffect(() => {
    if (!isDesktop || !gridRef.current) return;

    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.width = gridRef.current.offsetWidth + 'px';
    tempDiv.style.display = 'grid';
    tempDiv.style.gridTemplateColumns = getComputedStyle(gridRef.current).gridTemplateColumns;
    tempDiv.style.gap = getComputedStyle(gridRef.current).gap;
    tempDiv.style.padding = getComputedStyle(gridRef.current).padding;
    document.body.appendChild(tempDiv);

    let tallest = 0;

    TABS.forEach((tab) => {
      const items = tab.id === 'all' ? ITEMS : ITEMS.filter((i) => i.type === tab.id);

      items.forEach((item) => {
        const card = document.createElement('div');
        card.className = styles.card;
        card.innerHTML = `
          <div class="${styles.cardLogo}">${item.logo ? `<img src="${item.logo}" />` : ''}</div>
          <div class="${styles.cardBody}">
            <span class="${styles.type}">${item.type}</span>
            <strong class="${styles.name}">${item.name}</strong>
          </div>
        `;
        tempDiv.appendChild(card);
      });

      const height = tempDiv.scrollHeight;
      if (height > tallest) tallest = height;

      tempDiv.innerHTML = '';
    });

    setMaxGridHeight(tallest);
    document.body.removeChild(tempDiv);
  }, [isDesktop]);

  const visibleItems = isDesktop ? filteredItems : showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="section">
      <div className="__container">
        <div className={styles.header}>
          <div>
            <h2 className={`h2 ${styles.title}`}>Backers & Partners</h2>
            <p className={`subTitle ${styles.subtitle}`}>
              Together, we’re building the future of decentralized staking
            </p>
          </div>
          <div className={styles.tabs}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowAll(false);
                }}
              >
                {tab.label} <span>[{tab.count}]</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className={styles.grid}
          ref={gridRef}
          style={{
            minHeight: isDesktop && maxGridHeight ? `${maxGridHeight}px` : 'auto',
            transition: 'min-height 0.3s',
          }}
        >
          {visibleItems.map((item) => {
            const idStr = String(item.id);
            const isLastRow = lastRowIds.includes(idStr);
            const isSingle = singleInRowIds.includes(idStr);
            const isLastColumn = lastColumnIds.includes(idStr);

            return (
              <a
                href="#"
                key={item.id}
                data-id={item.id}
                className={`${styles.card} ${isLastRow ? styles.lastRow : ''} ${isSingle ? styles.singleRow : ''} ${
                  isLastColumn ? styles.lastColumn : ''
                }`}
              >
                {item.logo && (
                  <div className={styles.cardLogo}>
                    <img src={item.logo} alt={item.name || ''} />
                  </div>
                )}
                <div className={styles.cardBody}>
                  <span className={styles.type}>{item.type}</span>
                  <strong className={styles.name}>{item.name}</strong>
                </div>

                <div className={styles.hoverOverlay}>
                  <div className={styles.topLeft} />
                  <div className={styles.topRight} />
                  <div className={styles.bottomLeft} />
                  <div className={styles.bottomRight} />
                </div>
              </a>
            );
          })}
        </div>

        {!isDesktop && filteredItems.length > 4 && !showAll && (
          <Button variant="outline" className={styles.loadMoreBtn} onClick={() => setShowAll(true)}>
            <RefreshCw />
            load more
          </Button>
        )}
      </div>
    </section>
  );
}
