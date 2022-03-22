import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Reviews from '../../components/ReviewsList';



export default function Home() {
	return (
		<div>
			<Reviews />
		</div>
	);
}