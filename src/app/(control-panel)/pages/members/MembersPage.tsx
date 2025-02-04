'use client';

import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import MembersCollection from './MembersCollection';

/**
 * The Members page.
 */
function MembersPage() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	return (
		<FusePageSimple
			content={
				<div className="flex flex-col p-24">
					<PageBreadcrumb className="mb-8" />
					<Typography className="text-4xl font-extrabold leading-none tracking-tight mb-4">
						All Members
					</Typography>
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
