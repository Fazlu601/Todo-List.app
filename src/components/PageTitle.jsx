import React from 'react'
import { FaEdit } from 'react-icons/fa'

function PageTitle({children}) {
  return (
        <>
            <div className="container py-3">
                <h3 className="text-center fw-bold">{children}</h3>
            </div>
        </>
  );
}

export default PageTitle