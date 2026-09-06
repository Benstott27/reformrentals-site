import ReformerDetail from '../components/ReformerDetail.jsx'

export default function R8Pro() {
  return (
    <ReformerDetail
      eyebrow="Reformer"
      title="Align-Pilates R8-Pro Reformer"
      seoTitle="Align-Pilates R8-Pro Reformer Hire"
      seoDescription="Hire the Align-Pilates R8-Pro Reformer — full specifications and details. Delivery, setup and maintenance included. Enquire to hire for your studio or home."
      intro="A refined, slightly lower-profile reformer with a smooth 8-wheel carriage and a 5-position foot bar, well suited to boutique studios and home installations."
      photoLabel="R8-Pro Reformer Photo"
      highlights={[
        '8 PU-wheel carriage for a smooth, quiet glide',
        'Rapid Change spring bar for fast resistance adjustments between exercises',
        '5-position foot bar for an extended range of exercise setups',
        '4-spring system (2 strong, 1 medium, 1 light) with space for a 5th spring',
        'A lower 23cm profile, ideal for home and boutique studio spaces',
      ]}
      specs={[
        ['Dimensions', '248cm L × 67cm W × 23cm H'],
        ['Carriage size', '89cm × 56cm'],
        ['Carriage travel', '97.5cm'],
        [
          'Springs',
          '4 springs — 2 strong, 1 medium, 1 light — with space for a 5th spring',
        ],
        ['Carriage wheels', '8 PU-wheel carriage'],
        ['Foot bar', '5-position'],
        ['Spring bar', 'Rapid Change spring bar'],
        ['Max user weight', '120kg'],
        ['Machine weight', '59.1kg'],
      ]}
    />
  )
}
