import React from 'react';
import WelcomeMat from '~/components/welcome-mat';
import WelcomeMatTile from '~/components/welcome-mat/tile';
import WelcomeMatInfoBadge from '~/components/welcome-mat/info-badge';
import Button from '~/components/button';
import IconSettings from '~/components/icon-settings';

class Example extends React.Component {
	static displayName = 'welcomeMatExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div style={{ position: 'relative', height: '5rem' }}>
					<div style={{ width: '20rem' }}>
						<WelcomeMat
							id="welcome-mat-trailhead-example"
							labels={{
								title: 'The Lightning Experience is here!',
								description:
									'Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes."',
							}}
							infoBadge={
								<WelcomeMatInfoBadge
									image="/assets/images/welcome-mat/trailhead_badge@2x.png"
									id="welcome-mat-info-badge"
									onCompleteRenderActions={() => (
										<>
											<p>Cha-ching! You earned the badge.</p>
											<Button
												className="slds-m-top_medium"
												type="button"
												variant="brand"
												title="View on your Trailblazer Profile"
												label="View on your Trailblazer Profile"
											/>
										</>
									)}
								>
									<p>
										<strong>Lightning Explorer</strong>
									</p>
								</WelcomeMatInfoBadge>
							}
							variant="trailhead-connected"
						>
							<WelcomeMatTile
								title="Welcome to Salesforce!"
								description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet."
								icon="animal_and_nature"
								href="javascript:void(0);"
								id="welcome-mat-tile-1"
								isComplete
							/>
							<WelcomeMatTile
								title="Learn About OpenCTI!"
								description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet."
								icon="call"
								href="javascript:void(0);"
								id="welcome-mat-tile-2"
								isComplete
							/>
							<WelcomeMatTile
								title="Power Up the Utility Bar"
								description="Tap into case history or share notes with fellow agents—it all happens on the utility bar."
								href="javascript:void(0);"
								id="welcome-mat-tile-3"
								icon="call"
							/>
							<WelcomeMatTile
								title="Customize your view"
								description="Tailor your cases to your team&#x27;s workflow with custom list views."
								href="javascript:void(0);"
								id="welcome-mat-tile-4"
								icon="upload"
							/>
							<WelcomeMatTile
								title="Share the Knowledge"
								description="Harness your team&#x27;s collective know-how with our powerful knowledge base."
								href="javascript:void(0);"
								id="welcome-mat-tile-5"
								icon="knowledge_base"
							/>
						</WelcomeMat>
					</div>
				</div>
			</IconSettings>
		);
	}
}

export default Example;