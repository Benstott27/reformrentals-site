import { useMemo, useState } from 'react'
import SEO from '../components/SEO.jsx'
import EnquiryCTA from '../components/EnquiryCTA.jsx'

const REFORMER_LENGTH = 2.5
const REFORMER_WIDTH = 1
const WALKWAY = 1

function fitCount(span, unit, walkway) {
  if (span < unit) return 0
  return Math.floor((span + walkway) / (unit + walkway))
}

function calculateLayout(roomLength, roomWidth) {
  if (!roomLength || !roomWidth || roomLength <= 0 || roomWidth <= 0) {
    return null
  }

  // Orientation A: reformer's 2.5m side runs along the room's length
  const colsA = fitCount(roomLength, REFORMER_LENGTH, WALKWAY)
  const rowsA = fitCount(roomWidth, REFORMER_WIDTH, WALKWAY)
  const totalA = colsA * rowsA

  // Orientation B: reformer rotated 90°, 2.5m side runs along the room's width
  const colsB = fitCount(roomLength, REFORMER_WIDTH, WALKWAY)
  const rowsB = fitCount(roomWidth, REFORMER_LENGTH, WALKWAY)
  const totalB = colsB * rowsB

  if (totalB > totalA) {
    return { total: totalB, cols: colsB, rows: rowsB, orientation: 'rotated' }
  }
  return { total: totalA, cols: colsA, rows: rowsA, orientation: 'standard' }
}

export default function SpacePlanner() {
  const [length, setLength] = useState('6')
  const [width, setWidth] = useState('4')

  const layout = useMemo(
    () => calculateLayout(parseFloat(length), parseFloat(width)),
    [length, width],
  )

  return (
    <>
      <SEO
        title="Reformer Space Planner"
        description="Work out how many pilates reformers will fit in your studio or home room. Enter your room dimensions in metres for an instant estimate, including walkway space."
      />

      <section className="hero container">
        <span className="eyebrow eyebrow--red">Space Planner</span>
        <h1>How Many Reformers Fit?</h1>
        <p className="hero__intro">
          Enter your room dimensions to get an instant estimate. We allow
          2.5m × 1m of floor space per reformer, plus a 1m walkway between
          machines for safe, comfortable access.
        </p>
      </section>

      <section className="section section--bordered container">
        <div className="planner-grid">
          <div>
            <span className="eyebrow eyebrow--muted">Room Dimensions</span>
            <div className="form" style={{ marginTop: 20 }}>
              <div className="field">
                <label htmlFor="length">Room Length (metres)</label>
                <input
                  id="length"
                  type="number"
                  min="0"
                  step="0.1"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="width">Room Width (metres)</label>
                <input
                  id="width"
                  type="number"
                  min="0"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
            </div>

            <div className="planner-result">
              {layout && layout.total > 0 ? (
                <>
                  <span className="planner-result__number">
                    {layout.total}
                  </span>
                  <span className="eyebrow eyebrow--muted">
                    Reformer{layout.total === 1 ? '' : 's'} Estimated To Fit
                  </span>
                </>
              ) : (
                <p style={{ margin: 0 }}>
                  This room is too small to fit a reformer with a comfortable
                  walkway. Try a larger space, or get in touch — we may be
                  able to suggest an alternative layout.
                </p>
              )}
            </div>
          </div>

          <div>
            <span className="eyebrow eyebrow--muted">Visual Layout</span>
            {layout && layout.total > 0 ? (
              <div className="room-visual">
                <div
                  className="room-visual__grid"
                  style={{
                    gridTemplateColumns: `repeat(${layout.cols}, 1fr)`,
                  }}
                >
                  {Array.from({ length: layout.cols * layout.rows }).map(
                    (_, i) => (
                      <div key={i} className="room-visual__reformer">
                        Reformer
                      </div>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div
                className="photo-placeholder"
                style={{ height: 200, marginTop: 16 }}
                data-label="Enter dimensions to see layout"
              />
            )}
            <p style={{ marginTop: 16, fontSize: '0.85rem' }}>
              This is an estimate for planning purposes. Column and door
              positions, mirrors and storage may affect the final layout — we
              can visit or review floor plans to confirm.
            </p>
          </div>
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Space Planner"
        heading="Ready To Plan Your Studio?"
        text="Share your room dimensions and we’ll confirm the ideal reformer count and hire proposal."
      />
    </>
  )
}
