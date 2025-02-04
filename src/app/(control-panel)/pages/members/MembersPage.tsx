'use client';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import MembersCollection from './MembersCollection';
import FuseTabs from 'src/components/tabs/FuseTabs';
import FuseTab from 'src/components/tabs/FuseTab';
// import FuseLoading from '@fuse/core/FuseLoading';

/**
 * The Members page.
 */
function MembersPage() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const [tabValue, setTabValue] = useState('all');

	function handleTabChange(event: React.SyntheticEvent, value: string) {
		setTabValue(value);
	}

	return (
		<FusePageSimple
			content={
				<div className="flex flex-col p-24 gap-10">
					<div className="w-full">
						<FuseTabs
							value={tabValue}
							onChange={handleTabChange}
							aria-label="New user tabs"
						>
							<FuseTab
								value="all"
								label="All"
							/>
							<FuseTab
								value="certified"
								label="Certified"
							/>
							<FuseTab
								value="non-certified"
								label="Non Certified"
							/>
						</FuseTabs>
					</div>

					{tabValue === 'all' && (
						<Typography className="text-4xl font-extrabold leading-none tracking-tight mb-4">
							All Members
						</Typography>
					)}
					{tabValue === 'certified' && (
						<Typography className="text-4xl font-extrabold leading-none tracking-tight mb-4">
							Certified Members
						</Typography>
					)}
					{tabValue === 'non-certified' && (
						<Typography className="text-4xl font-extrabold leading-none tracking-tight mb-4">
							Non-Certified Members
						</Typography>
					)}

					<Typography
						className="text-lg"
						color="text.secondary"
					>
						Application wide Members are listed here as individual items, starting with the most recent.
					</Typography>
					<MembersCollection />
				</div>
			}
			scroll={isMobile ? 'normal' : 'page'}
		/>
	);
}

export default MembersPage;
