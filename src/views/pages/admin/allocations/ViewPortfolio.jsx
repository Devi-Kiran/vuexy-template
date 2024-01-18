import React from 'react';
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import ViewPortfolioCard from '../../../../@core/components/ametecs/viewPortfolios/ViewPortfolioCard';

function ViewPortfolio() {
  return (
    <div>
      <BreadCrumbs breadCrumbTitle="View Portfolios" breadCrumbActive="View Portfolios" />
      <ViewPortfolioCard/>
      <ViewPortfolioCard/>
      <ViewPortfolioCard/>
      <ViewPortfolioCard/>
      <ViewPortfolioCard/>
      <ViewPortfolioCard/>
    </div>
  )
}

export default ViewPortfolio