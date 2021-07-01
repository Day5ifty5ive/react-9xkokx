import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <form method="post" action="" name="signup-form">
        <div class="form-element">
          <div>
            <label>•</label>
          </div>
          <div>
            <label>•</label>
          </div>
          <div>
            <label>•</label>
          </div>
          <button type="submit" name="register" value="register">
            Rifiuta
          </button>
          <button type="submit" name="register" value="register">
            Accetta
          </button>
        </div>
      </form>
    </div>
  );
}
