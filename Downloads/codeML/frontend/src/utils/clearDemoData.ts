/**
 * Clear all demo data from localStorage
 */
export const clearDemoData = () => {
try {
    // Clear all ML ProCode related data
    localStorage.removeItem('mlprocode_users');
    localStorage.removeItem('mlprocode_submissions');
    localStorage.removeItem('mlprocode_problems');
    localStorage.removeItem('mlprocode_user');
    localStorage.removeItem('token');
    
    console.log('Demo data cleared successfully');
    return true;
  } catch (error) {
    console.error('Failed to clear demo data:', error);
    return false;
  }
};

/**
 * Check if demo data exists
 */
export const hasDemoData = () => {
  const submissions = localStorage.getItem('mlprocode_submissions');
  if (submissions) {
    try {
      const parsed = JSON.parse(submissions);
      return parsed.length > 0;
    } catch {
      return false;
    }
  }
  return false;
};

/**
 * Reset application state completely
 */
export const resetApplication = () => {
  try {
    // Clear all localStorage
    localStorage.clear();
    
    // Reload the page to reset everything
    window.location.reload();
    
    console.log('Application reset successfully');
    return true;
  } catch (error) {
    console.error('Failed to reset application:', error);
    return false;
  }
}; 