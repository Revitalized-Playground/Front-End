/**
 * * Description of component
 * TODO: things to do
 * @props description
 */

const links = [
	{ href: '#', label: "FAQ's" },
	{ href: '#', label: 'Meet the Team' },
	{ href: '#', label: 'Donate' },
	{ href: '#', label: 'Contact' },
	{ href: '#', label: 'Resources' },
	{ href: '#', label: 'Reviews' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

export default function Footer() {
	return (
		<div className="footer">
			<ul className="links-container">
				{links.map(({ key, href, label }) => (
					<li key={key}>
						<a href={href}>{label}</a>
					</li>
				))}
			</ul>
			<div className="social-links-container">
				<a href="#" className="fa fa-github"></a>
				<a href="#" className="fa fa-facebook"></a>
				<a href="#" className="fa fa-linkedin"></a>
				<a href="#" className="fa fa-twitter"></a>
			</div>
			<span className="copyright">
				Revitalize &copy; <span className="italics">2019 All Rights Reserved</span>{' '}
			</span>
		</div>
	);
}
