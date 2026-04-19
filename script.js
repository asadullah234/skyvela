
  function setTab(el) {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('bg-brand-light', 'text-brand');
      b.classList.add('text-gray-500');
    });
    el.classList.add('bg-brand-light', 'text-brand');
    el.classList.remove('text-gray-500');
  }
  function setTrip(el) {
    document.querySelectorAll('.trip-btn').forEach(b => {
      b.classList.remove('bg-brand', 'text-white');
      b.classList.add('bg-gray-100', 'text-gray-500');
    });
    el.classList.add('bg-brand', 'text-white');
    el.classList.remove('bg-gray-100', 'text-gray-500');
  }

  function setActiveTab(clickedTab) {
    // 1. Get all tabs
    const tabs = document.querySelectorAll('.tab-item');

    // 2. Reset all tabs to "inactive" state
    tabs.forEach(tab => {
      // Remove active classes
      tab.classList.remove('border-blue-900', 'text-blue-900', 'font-semibold');
      tab.classList.add('border-transparent', 'text-gray-400', 'font-medium');
    });

    // 3. Set the clicked tab to "active" state
    clickedTab.classList.remove('border-transparent', 'text-gray-400', 'font-medium');
    clickedTab.classList.add('border-blue-900', 'text-blue-900', 'font-semibold');
  }


  function toggleMenu() {
    const container = document.getElementById('side-menu-container');
    const panel = document.getElementById('sidebar-panel');
    
    if (container.classList.contains('invisible')) {
      container.classList.remove('invisible');
      panel.classList.remove('translate-x-full');
    } else {
      panel.classList.add('translate-x-full');
      setTimeout(() => {
        container.classList.add('invisible');
      }, 300); // Matches transition duration
    }
}



  function toggleMenu() {
    const container = document.getElementById('menu-container');
    const panel = document.getElementById('menu-panel');
    const isMobile = window.innerWidth < 768;

    if (container.classList.contains('invisible')) {
      container.classList.remove('invisible');
      // Slide in from right on mobile, slide down from top on laptop
      if (isMobile) {
        panel.classList.remove('translate-x-full');
      } else {
        panel.classList.remove('md:-translate-y-full');
        panel.classList.add('md:translate-y-0');
      }
    } else {
      if (isMobile) {
        panel.classList.add('translate-x-full');
      } else {
        panel.classList.add('md:-translate-y-full');
        panel.classList.remove('md:translate-y-0');
      }
      setTimeout(() => {
        container.classList.add('invisible');
      }, 300);
    }
  }

  function setTripType(clickedBtn) {
    // 1. Get all buttons in the section
    const buttons = document.querySelectorAll('.trip-tab');

    buttons.forEach(btn => {
      const dot = btn.querySelector('.status-dot');

      // 2. Set inactive style for everyone
      btn.classList.remove('bg-blue-950', 'text-white');
      btn.classList.add('bg-[#EDEEF1]', 'text-[#5B616E]');
      
      // Reset Dot to inactive (gray border)
      dot.classList.remove('border-white', 'ring-2', 'ring-blue-950', 'bg-white');
      dot.classList.add('border-[#5B616E]');
    });

    // 3. Set Active style for the clicked button
    clickedBtn.classList.remove('bg-[#EDEEF1]', 'text-[#5B616E]');
    clickedBtn.classList.add('bg-blue-950', 'text-white');
    
    // Set Dot to active (White center with blue ring)
    const activeDot = clickedBtn.querySelector('.status-dot');
    activeDot.classList.remove('border-[#5B616E]');
    activeDot.classList.add('border-white', 'ring-2', 'ring-blue-950', 'bg-white');
  }
