'use client';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseTabs from 'src/components/tabs/FuseTabs';
import FuseTab from 'src/components/tabs/FuseTab';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';
import HomeTab from './tabs/home/HomeTab';
import { useGetProjectDashboardWidgetsQuery } from './ProjectDashboardApi';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		boxShadow: `inset 0 -1px 0 0px  ${theme.palette.divider}`
	}
}));

/**
 * The ProjectDashboardApp page.
 */
function ProjectDashboardApp() {
	const { isLoading } = useGetProjectDashboardWidgetsQuery();

	const [tabValue, setTabValue] = useState('home');

	function handleTabChange(event: React.SyntheticEvent, value: string) {
		setTabValue(value);
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<Root
			header={<ProjectDashboardAppHeader />}
			content={
				<div className="w-full pt-16 sm:pt-24">
					<div className="w-full px-24 md:px-32">
						<FuseTabs
							value={tabValue}
							onChange={handleTabChange}
							aria-label="New user tabs"
						>
							<FuseTab
								value="home"
								label="Home"
							/>
						</FuseTabs>
					</div>
					{tabValue === 'home' && <HomeTab />}
				</div>
			}
		/>
	);
}

export default ProjectDashboardApp;
