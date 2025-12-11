// components/ui/itemCard/ProfileCard_01.tsx

import React from "react"

interface ProfileCard_01Props {
  label: string
  value: string
}

const ProfileCard_01 = ({ label, value }: ProfileCard_01Props) => {
  return (
    <dl className="text-lg pb-5 border-b border-accentLight2">
      <dt className="flex items-baseline text-accentLight">
        {label}
      </dt>
      <dd className="mt-2">
        {value}
      </dd>
    </dl>
  )
}

export default ProfileCard_01
