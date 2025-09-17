import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";

const CandidateForm = () => {
    const router = useRouter();
    const { sectorId } = router.query;

    
    return (
        <div>
            test
        </div>
    )
}

export default CandidateForm;